module.exports = {
  siteMetadata: {
    title: `Full-Stack Software Engineer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@zraulpalacios`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-firestore`,
      options: {
        appConfig: {
          apiKey: $API_KEY,
          authDomain: $AUTH_DOMAIN,
          databaseURL: $DATABASE_URL,
          projectId: $PROJECT_ID,
          storageBucket: $STORAGE_BUCKET,
          messagingSenderId: $MESSAGING_SENDER,
          appID: $APP_ID,
        },
        types: [{
          type: `Project`,
          collection: `projects`,
          map: doc => ({
            background: doc.background,
            description: doc.description,
            logo: doc.logo,
            name: doc.name,
            technologies: doc.technologies,
            video: doc.video
          })
        }]
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
