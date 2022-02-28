import * as React from "react"
import { Link } from 'gatsby'
import * as style from "../styles/blog.module.scss"

const Pagination = ({ pageContext }) => {
    const { numberPages } = pageContext
    return (
        <h2 className={style.paginationWrapper}>
            {Array.from({ length: numberPages }, (_, i) => (
                <Link key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
                {i + 1}
                </Link>
            ))}
        </h2>
    )
}

export default Pagination