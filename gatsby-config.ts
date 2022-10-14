import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Corsage`,
    siteUrl: `https://corsage.rebirth.dev`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-ZPPXDP8PKT'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0
        }
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: './src/data/blog'
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-htaccess',
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ]
};

export default config;
