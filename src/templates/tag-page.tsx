import React from 'react';
import { graphql, StaticQueryDocument } from 'gatsby';
import PostItem from '../components/blog/post-item';
import BlogPost from '../models/blog-post';

interface Props {
  pageContext: { tag: string };
  data: StaticQueryDocument;
}

const TagPage = ({ pageContext, data }: Props) => {
  const { tag } = pageContext;
  const { posts } = data;

  return (
    <div className="w-full my-10">
      <div className="text-center text-white my-10">
        <h1 className="text-4xl font-semibold uppercase tracking-widest">
          {posts.totalCount} post(s) tagged "{tag}"
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 my-10">
        {posts.nodes.map((node: any) => {
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
  query ($tag: String!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default TagPage;
