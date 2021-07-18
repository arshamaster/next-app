import * as React from 'react'
import Layout from '../components/layout'
import logo from "../images/Next-App.png"

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <p>Welcome to Next App.</p>
        <img src={logo} alt="Next App" />
      </Layout>
    </main>
  )
}

export default IndexPage