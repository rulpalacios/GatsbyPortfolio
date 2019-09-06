/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "../css/mystyles.css"
import MadeGatsby from '../images/made-with-gatsby.png'

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer className="footer">
        <div className="content has-text-centered">
          <p className="copy">
            Handcrafted with love by myself. © {new Date().getFullYear()}
          </p>
          <div className="made-with-bulma">
            <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"/>
          </div>
          <div className="made-with-gatsby">
            <img src={MadeGatsby} alt="Made with Gatsby" width="80" height="20"/>
          </div>
          </div>
      </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
