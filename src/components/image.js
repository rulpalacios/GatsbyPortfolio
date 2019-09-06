import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({name, styleClass = 'img-tech'}) => {
    const data = useStaticQuery(
      graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `
    )
    const image = data.images.edges.find(n => {
      return n.node.relativePath.includes(name);
    });
    if (!image) { return null; }
    console.log(image.node.childImageSharp.sizes)
    // <Img fluid={image.node.childImageSharp.fluid} />
    return <Img fluid={image.node.childImageSharp.sizes} className={styleClass}/>
}


export default Image