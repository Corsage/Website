import React from 'react';
import { graphql, HeadFC, HeadProps, PageProps } from 'gatsby';

import SEO from '../components/seo';

import PostItem from '../components/blog/post-item';
import BlogPost from '../models/blog-post';

type DataProps = {
  posts: {
    totalCount: number;
    nodes: {
      id: string;
      excerpt: string;
      timeToRead: number;
      frontmatter: {
        title: string;
        description: string;
        tags: string[];
        date: string;
      };
    }[];
  };
};

type PageContextProps = {
  tag: string;
};

const TagPage = ({
  data: { posts },
  pageContext: { tag }
}: PageProps<DataProps, PageContextProps>) => {
  return (
    <div className="w-full my-10 mx-6 sm:mx-0">
      <div className="flex flex-col my-10 gap-12">
        <div className="flex w-full justify-center">
          <h2 className="text-4xl font-semibold uppercase text-white text-center">
            {posts.totalCount} post(s) tagged "{tag}"
          </h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {posts.nodes.map((node) => {
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
    </div>
  );
  return (
    <div className="w-full my-10">
      <div className="text-center text-white my-10">
        <h1 className="text-4xl font-semibold uppercase tracking-widest">
          {posts.totalCount} post(s) tagged "{tag}"
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 my-10">
        {posts.nodes.map((node) => {
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
export const Head: HeadFC<DataProps, PageContextProps> = (
  props: HeadProps<DataProps, PageContextProps>
) => <SEO title={`tagged "${props.pageContext.tag}"`} />;
