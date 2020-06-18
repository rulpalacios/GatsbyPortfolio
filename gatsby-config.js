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
        credential: {
          "apiKey": process.env.GATSBY_API_KEY,
          "authDomain": process.env.GATSBY_AUTH_DOMAIN,
          "databaseURL": process.env.GATSBY_DB_URL,
          "projectId": process.env.GATSBY_PROJECT_ID,
          "storageBucket": process.env.GATSBY_STORAGE_BUCKET,
          "messagingSenderId": process.env.GATSBY_MESSAGING_SENDER,
          "appID": process.env.GATSBY_APP_ID,
          "type": process.env.GATSBY_TYPE,
          "project_id": process.env.GATSBY_PROJECT_ID,
          "private_key_id": process.env.GATSBY_PRIVATE_KEY_ID,
          "private_key": process.env.GATSBY_PRIVATE_KEY.replace(/\\n/g, "\n"),
          "client_email": process.env.GATSBY_CLIENT_EMAIL,
          "client_id": process.env.GATSBY_CLIENT_ID,
          "auth_uri": process.env.GATSBY_AUTH_URI,
          "token_uri": process.env.GATSBY_TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.GATSBY_AUTH_PROVIDER,
          "client_x509_cert_url":process.env.GATSBY_CLIENT_CERT,
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
