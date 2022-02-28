import * as React from "react"
import { graphql } from "gatsby" 
import { GatsbyImage, getImage } from "gatsby-plugin-image"     
import Layout from "../components/layout"
import Seo from "../components/seo" 
import PrevNext from "../components/prevNext"
import * as style from "../styles/singleBlog.module.scss"
 
const SingleBlog = ({ data, pageContext }) => {         
    const { title, date, excerpt, image } = data.markdownRemark.frontmatter          
    const { html } = data.markdownRemark          
    const img = getImage(image.childImageSharp.gatsbyImageData)          
    return (
        <Layout>
            <Seo title={title} description={excerpt} />      
            <div className={style.hero}>
                <GatsbyImage image={img} alt="blog-image" />      
            </div>
            <div className={style.wrapper}>  
                <div className={style.container}>               
                    <h1>{title}</h1>      
                    <p>{date}</p>       
                    <div dangerouslySetInnerHTML={{ __html: html }} />       
                </div> 
                <PrevNext pageContext={pageContext} />
            </div>
        </Layout>                    
    )
}


export default SingleBlog

export const query = graphql`
    query SingleBlogQuery ($slug: String!) {     
        markdownRemark(fields: { slug: { eq: $slug } }) {   
            frontmatter {
                    date
                    excerpt
                    id
                    title
                    image {
                        childImageSharp {
                          gatsbyImageData(            
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF] 
                                quality: 90
                                width: 1000
                            )
                        }
                    }
            }
            html
        }
    }
`