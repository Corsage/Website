import React from 'react';
import { graphql, StaticQueryDocument } from 'gatsby';
import PostItem from '../../components/blog/post-item';
import BlogPost from '../../models/blog-post';

interface Props {
  data: StaticQueryDocument;
}

const Blog = ({ data }: Props) => {
  const posts = data.posts.nodes;

  return (
    <div className="w-full my-10">
      <div className="text-center text-white my-10">
        <h1 className="text-4xl font-semibold uppercase tracking-widest">
          Corsage
        </h1>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          quis leo lectus. Nulla ac neque tellus. Praesent mollis ultrices orci.
          Vivamus ut interdum mi. Sed{' '}
        </p>
      </div>

      <div className="grid grid-cols-3 items-start gap-6 my-10">
        {posts.map((node: any) => {
          const post: BlogPost = {
            id: node.id,
            title: node.frontmatter.title,
            tags: node.frontmatter.tags,
            date: node.frontmatter.date,
            excerpt: node.excerpt,
            timeToRead: node.timeToRead
          };

          return <PostItem key={`blog-post-${post.id}`} post={post} />;
        })}
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      nodes {
        id
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`;

export default Blog;
