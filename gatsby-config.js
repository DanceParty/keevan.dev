module.exports = {
  siteMetadata: {
    title: `Keevan Dance`,
    titleSecondary: `🎉 Dance Party 🎉`,
    description: `A blog written by Keevan Dance.`,
    author: `@DanceParty_`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Keevan Dance`,
        short_name: `Keevan`,
        start_url: `/`,
        background_color: `#93bad0`,
        theme_color: `#93bad0`,
        display: `minimal-ui`,
        icon: `src/assets/icon-180x180.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
