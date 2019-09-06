const path = require('path')

exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/Project.js`)
    const result = await graphql(`
        query GET_PROJECTS {
        allProject{
            edges{
            node{
                name
                description
                logo
                technologies
                video
                background
            }
            }
        }
        }
  `)

  if(result.errors){
    throw result.errors
  }

  result.data.allProject.edges.forEach(({node}) => {
    createPage({
        path: `${node.name}`,
        component: projectTemplate,
        context: node
    })
})
}
