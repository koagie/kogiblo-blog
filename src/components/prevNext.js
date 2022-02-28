
import * as React from "react"
import { Link } from 'gatsby'
import ArrowLeft from "../images/arrow-left.svg"
import ArrowRight from "../images/arrow-right.svg"
import * as style from "../styles/singleBlog.module.scss"

const PrevNext =({ pageContext }) => {
    const { previous, next } = pageContext
    return (
        <div className={style.pnWrapper}>
            {previous && 
                <Link to={`/blog${previous.fields.slug}`} className={style.linkCard}>
                    <img src={ArrowLeft} alt="arrow-left"/>
                    <h3> {previous.frontmatter.title}</h3>
                </Link>
            }
            {next && 
                <Link to={`/blog${next.fields.slug}`} className={style.linkCard}>
                    <h3>{next.frontmatter.title}</h3>
                    <img src={ArrowRight} alt="arrow-right"/>
                </Link>
            }
        </div>
    )
}

export default PrevNext