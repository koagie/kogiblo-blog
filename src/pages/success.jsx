import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo" 

const Success = () => {
    return (
        <Layout>
            <Seo title="ありがとうございます" description="これはサクセスページです" /> 
            <div style={{textAlign: "center", height: "70vh"}}>
            <h1>ご連絡ありがとうございます</h1>
            <p>2営業日以内にご返信いたします。</p>
            </div>
        </Layout>
    )
}

export default Success