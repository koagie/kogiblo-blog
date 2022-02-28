import * as React from "react"
import { Link } from "gatsby"  
import { StaticImage } from "gatsby-plugin-image" 
import Layout from "../components/layout"
import Seo from "../components/seo"
import JSLogo from "../images/javascript.svg"  
import ReactLogo from "../images/react.svg"    
import GatsbyLogo from "../images/gatsby.svg"   
import NextLogo from "../images/next.svg" 
import * as style from "../styles/index.module.scss"  

const Index = () => {
    return (
        <Layout>
            <Seo title="Abe Hiroki" description="Abe Hirokiのポートフォリオサイトです" />
            <div className={style.hero}>
                <StaticImage src="../images/index-hero.jpg" alt="hero" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} className={style.heroImg} />
                <div className={style.textContainer}>
                    <h1>I'm kogi nagata!</h1>
                    <h3>full-stack developer</h3>
                </div>
            </div>
            <div className={style.container}>
                <div className={style.profile}>
                    <div>
                        <h2>Laravel Nerd</h2>
                        <p>Gatsby v4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <StaticImage src="../images/profile.jpg" alt="profile" quality={90} placeholder="blurred" formats={["AUTO", "WEBP", "AVIF"]} />
                </div>
                <div className={style.skills}>
                    <h2>Skills</h2>
                    <div className={style.skillsContainer}>
                        <div><img src={JSLogo} alt="javascript"/><span>Laravel / 2 years</span></div>
                        <div><img src={ReactLogo} alt="react"/><span>React / 1 years</span></div>
                        <div><img src={GatsbyLogo} alt="gatsby"/><span>Gatsby / 1 years</span></div>
                        <div><img src={NextLogo} alt="next"/><span>Next.JS / 1 years</span></div>
                    </div>
                </div>
                <div className={style.ctaButton}>
                    <Link to="/contact">Make It Happen!</Link>
                </div>
            </div>
        </Layout>
    )
}

export default Index