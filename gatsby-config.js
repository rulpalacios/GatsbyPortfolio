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
          "type": "service_account",
          "project_id": "portfolio-2d0d5",
          "private_key_id": "4c0e6c5b0054988654aa099808305f9b31547d5a",
          "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDca/xo5Xe+c96O\nQ2ggX0kXtV3c10vSU6crQg48E0ZKV1d1lF7lS9nGgRtH9YQ6VtngtK/OeiRock0a\nfnWMxjnS1avk5xleFRLmZfIsMs9WiJNYCitOh+Bw2W1BfXnlB+c6jviN1IDrh1F8\nMO30PQnx5gYvCohM2aAj2wgLniJeoO63ddHIVc9bEmgoQS1+uQKYtF+kpmcU+cEO\ncZqjuxDfkPXquhfNOlPtEpJm4lPVK7RaBqG+mvp2d0BxuHAF0LaQ4TblZDQVFJuj\nmWhzaSnEVzOpoWmOmKS4uW6+TKRw82zxz0a4VKGJrz3RsFiXxTbkV/wRmoPi+g9y\nrZjsdyhnAgMBAAECggEAZF3RYaw3AaQ+DzZXSAJLRH3jnwbzsfJAWNyroaQ/KeOq\nYdItAaivoYkxNGtxiaT5ca2krdaFFIATZsB1YyPxuXRs4H5wWRwsbne2NXTvXx4y\nRXDf9lK9mnUOoDbz1ZtrKQln2SENkPGdY3jeKQvQJvMQFsRret7PYfQ+rheT29UA\nZ2VtCd7To35rQ1AT5g9LqRlhwwR0x9eSstftXSg0D1q9W8564/tX3OUUMvjaM7p2\n/XBcExj+YK920k/Aqrf/wbgS3VONyJvOg2QdSXMBUR/rFVOXVZbwCylLWp9rpky7\nmpuSGRuJ+ccebvtv5I4h/RiQKyeS37AgJmfDo20ExQKBgQDzo+83HVdhIMoRZ30O\n4CEqo1k6bEh+/HGGbHBxMWa8cqO/wALSOgatHu+2QaPAhVMFZhlYdBRu7y90KjC5\n5wF6c21hxQUSEBMbnT0O62BdU1v/bM+gNch6TV8HgToycTR3tOOKlutzxwPvprqx\nlJRYk4EZoh68YyWdIKkISFlPYwKBgQDnmoVgw4V64fpIpLYBgs0InhJ2wtzzHwKi\nHRTaONN7FJbwQTOzABn9Z5vdigEuR8XAstig9yHBLYX4wv0+VR+1Bmp7J4OYdIGV\nK2b8WXZuempv+0XTB9qhab3isvLzYny+kmSOD8SGCVBHmZhoYlCrS+owQlp48CMq\nbCHKyAM8LQKBgQCS+5ZIKLJbTT26bDV88OfxYiRlY4gE2+TdFLRtBUGWdI6nEn5h\nN1JpxJ0W1dilP4mLW0H1I+pj1nZJXV6R+HPi3JnjfsmFUR9F7IE2a/dxteVtXcaQ\nP4IXjm/DBkoGvlbJ1N3k8RFQgoK0ZGCC20D3gt1CipSCUEoT1e1Dqun+QwKBgFRd\nnFJoRrpBkQtfPJGGVSvbcPxj9Vp2pF3rXAo2Awtlr6nrBmshEVaWpFdqCw4RxP5x\n56mS/G/DJnc8iEVperhVkvozpaMmZYGyIryv1g1eeGE8Ve4OgVylCS+IYim4aZp9\n9zUslzkAMYczcyorDhmn+LIFqbE+QIEWjKSygUMtAoGBAOR7+FrQ+FcMhu1WUThP\nNM0Tui0hJW124zrNC0DQ83NXR8yM42U05AQZvF9tTVpfiTN2pJRayl7cd7Q4Yjh+\n08PlBP5i0nGln4uWi1iqMkIs6oHZYOiAwDXiPpYXRi86tOmhcitZ6bT/dey7rs34\n+dNn7IY4koZYfRm6XaD4+NMj\n-----END PRIVATE KEY-----\n".replace(/\\n/g, "\n"),
          "client_email": "firebase-adminsdk-q0gbj@portfolio-2d0d5.iam.gserviceaccount.com",
          "client_id": "102242859877120238921",
          "auth_uri": "https://accounts.google.com/o/oauth2/auth",
          "token_uri": "https://oauth2.googleapis.com/token",
          "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
          "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q0gbj%40portfolio-2d0d5.iam.gserviceaccount.com"
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
