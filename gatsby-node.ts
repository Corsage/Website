import type { GatsbyNode } from 'gatsby';
import { createFilePath } from 'gatsby-source-filesystem';
import path from 'path';

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions;

  const res = await graphql(`
    {
      posts: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        nodes {
          id
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(
      `There was an error loading the blog posts.`,
      res.errors
    );
    return;
  }

  const posts = res.data.posts.nodes;

  posts.forEach((node) => {
    createPage({
      path: `blog/${node.id}`,
      component: path.resolve('src/components/blog/post-page.tsx'),
      context: {
        id: node.id
      }
    });
  });
};
