import React, { useEffect } from 'react';
import { graphql, HeadFC, Link, PageProps, navigate } from 'gatsby';

import SEO from '../../components/seo';

import PostItem from '../../components/blog/post-item';
import BlogPost from '../../models/blog-post';
import Autocomplete from '../../components/autocomplete';

type DataProps = {
  posts: {
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

const Blog = ({ data: { posts } }: PageProps<DataProps>) => {
  const tags: Set<string> = new Set();

  useEffect(() => {
    // Populate all tags into a set to be used by autocomplete.
    posts.nodes.forEach((node) => {
      node.frontmatter.tags.forEach((tag) => {
        tags.add(tag);
      });
    });
  });

  return (
    <div className="w-full my-10 mx-6 sm:mx-0">
      <div className="flex flex-col items-center justify-center gap-3 text-white my-10">
        <h1 className="text-4xl font-semibold uppercase tracking-widest">
          Corsage
        </h1>

        <p className="font-mono text-center">
          This is a collection of my thoughts and notes for various things.
        </p>

        <div className="flex w-full flex-col justify-center items-center gap-3 mt-3">
          <label className="relative w-full sm:w-2/3 lg:w-1/2 text-light-cyan focus-within:text-cyan">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <Autocomplete
              placeholder="Search tags..."
              items={tags}
              onClick={(tag) => {
                navigate(`/blog/tags/${tag}`);
              }}
            />
          </label>

          <span className="font-mono">
            Favorite tag(s):{' '}
            <Link
              to="/blog/tags/leetcode"
              className="text-accent hover:underline"
            >
              leetcode
            </Link>{' '}
          </span>
        </div>
      </div>

      <div className="flex flex-col my-10 gap-12">
        <div className="flex w-full items-center">
          <h2 className="text-4xl font-semibold uppercase text-white">
            Latest Posts
          </h2>
          <span className="h-0.5 flex-1 ml-6 bg-white" />
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
};

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      limit: 9,
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
export const Head: HeadFC = () => <SEO title="Blog" />;
