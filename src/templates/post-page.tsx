import React from 'react';
import { graphql, StaticQueryDocument } from 'gatsby';
import PostItem from '../components/blog/post-item';
import BlogPost from '../models/blog-post';

interface Props {
  data: StaticQueryDocument;
}

const PostPage = ({ data }: Props) => {
  console.log(JSON.stringify(data));

  const { post } = data;

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
