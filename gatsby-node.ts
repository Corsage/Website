import type { GatsbyNode } from 'gatsby';
import path from 'path';

const toKebabCase = (s: string) => {
  return s
    .match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )!
    .join('-')
    .toLowerCase();
};

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
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          fieldValue
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
  const tags = res.data.tags.group;

  // Create a page dynamically for each blog post, i.e. markdown file.
  posts.forEach((node: any) => {
    createPage({
      path: `blog/${node.id}`,
      component: path.resolve('src/templates/post-page.tsx'),
      context: {
        id: node.id
      }
    });
  });

  // Create a page for each tag.
  tags.forEach((tag: any) => {
    createPage({
      path: `blog/tags/${toKebabCase(tag.fieldValue)}`,
      component: path.resolve('./src/templates/tag-page.tsx'),
      context: {
        tag: tag.fieldValue
      }
    });
  });
};
