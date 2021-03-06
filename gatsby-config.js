/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: { prefixes: ['/user/*'] },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-use-query-params',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Aleo',
          'Open Sans',
        ],
        display: 'swap',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
