const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`) 

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
  
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode })   
      createNodeField({         
        node,                   
        name: `slug`,           
        value: slug,            
      })
    }
}

exports.createPages = async ({ graphql, actions }) => { 
    const { createPage } = actions 
    const result = await graphql(`              
        query {
            allMarkdownRemark (sort: { order: ASC, fields: [frontmatter___id] }){
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                    next {
                        frontmatter {
                            title
                        }
                        fields {
                            slug
                        }
                    }
                    previous {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                        }
                    }
                }
            }
        }
    `)
    result.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
        createPage({
            path: `blog${node.fields.slug}`,
            component: path.resolve(`./src/templates/single-blog.jsx`),
            context: {
                slug: node.fields.slug,
                next,     
                previous,
            },
        })
    })

    const blogs = result.data.allMarkdownRemark.edges
    const blogsPerPage = 5
    const numberPages = Math.ceil(blogs.length / blogsPerPage)
    Array.from({ length: numberPages }).forEach((_, i) => {
        createPage({
            path: i === 0 ? `/blog` : `/blog/${i + 1}`,
            component: path.resolve(`./src/templates/blog.jsx`),
            context: {
                limit: blogsPerPage,
                skip: i * blogsPerPage,
                numberPages,
                currentPage: i + 1,
            },
        })
    })
    
}  