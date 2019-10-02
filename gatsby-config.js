/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`,
// });
require('dotenv').config({ path: `${__dirname}/config.env` });

module.exports = {
  siteMetadata: {
    title: 'Travellness',
    description: 'Come to were the life is. Travel well. Travellness.',
    author: '@io',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
  ],
};
