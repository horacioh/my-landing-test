import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DemoPage = () => (
  <Layout>
    <SEO title="Demo Page" />
    <h1>Hi from the Demo page</h1>
    <p>Welcome to Demo Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DemoPage
