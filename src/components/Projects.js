import React from 'react'
import { Link } from 'gatsby'

const Projects = ({projects}) =>(
    <>
    {projects.map(({node}) => {
        return <div className="column" key={node.logo}>
          <div className="has-text-centered" >
            <Link to={`/${node.name}`}>
                <img src={node.logo} alt={node.name} style={{height: '150px'}}/>
            </Link>
          </div>
        </div>
    })}
    </>
) 
    

export default Projects