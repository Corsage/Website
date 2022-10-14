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
    <div className="w-full my-10">
      <div className="text-center text-white my-10">
        <h1 className="text-4xl font-semibold uppercase tracking-widest">
          {post.frontmatter.title}
        </h1>
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
