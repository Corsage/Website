import React, { useState } from 'react';
import { graphql, HeadFC, HeadProps, Link, PageProps } from 'gatsby';

import SEO from '../components/seo';
import CommentModal from '../components/blog/comment-modal';

type ContextProps = {
  id: string;
};

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

const PostPage = ({
  data: { post },
  pageContext
}: PageProps<DataProps, ContextProps>) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <>
      <CommentModal
        id={pageContext.id}
        title={post.frontmatter.title}
        show={showComments}
        close={() => setShowComments(false)}
      />
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

        <button
          type="button"
          className="fixed z-40 bottom-6 right-6 inline-flex items-center p-3 bg-accent rounded-full hover:bg-dark-accent shadow-lg text-dark-cyan"
          onClick={() => setShowComments(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </button>

        {/* Back to blog and related tags. */}
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
    </>
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
