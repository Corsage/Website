import React from 'react';
import { graphql, HeadFC, HeadProps, Link, PageProps } from 'gatsby';

import SEO from '../components/seo';

type DataProps = {
  post: {
    html: string;
    frontmatter: {
      title: string;
      description: string;
      tags: string[];
      date: string;
    };
  };
};

const PostPage = ({ data: { post } }: PageProps<DataProps>) => {
  return (
    <div className="flex flex-col w-full my-10 mx-6 sm:mx-0 items-center">
      <div className="flex w-full items-center">
        <h2 className="text-4xl font-semibold uppercase text-white text-center">
          {post.frontmatter.title}
        </h2>
        <span className="h-0.5 flex-1 ml-6 bg-white" />
      </div>

      <article
        className="flex w-full flex-col blog-post text-white gap-3 my-10"
        style={{ maxWidth: 1000 }}
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <div className="flex flex-col-reverse md:flex-row w-full justify-center items-center gap-3">
        <Link
          to="/blog"
          className="flex flex-row w-fit h-fit px-4 py-2 rounded bg-medium-cyan text-white hover:bg-dark-cyan"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          Back to Blog
        </Link>
        <div className="flex flex-col justify-center items-center md:flex-row gap-3 px-2 py-1 rounded text-white dark:text-medium-cyan">
          <span className="text-xl font-semibold">Explore related tags</span>
          {post.frontmatter.tags.map((tag: string) => {
            return (
              <Link
                key={`related-tag-${tag}`}
                to={`/blog/tags/${tag}`}
                className="hover:underline"
              >
                {tag}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        description
        tags
        title
      }
    }
  }
`;

export default PostPage;
export const Head: HeadFC<DataProps> = (props: HeadProps<DataProps>) => (
  <SEO title={props.data.post.frontmatter.title} />
);
