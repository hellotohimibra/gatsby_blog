import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Gatsby blog</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
  </div>
    <p>This is part of my #100daysofcode journey. It is acually my day1 challange.</p>
  </Layout>
)

export default IndexPage
