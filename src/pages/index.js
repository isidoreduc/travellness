import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Banner from "../components/banner"
import { Link } from "gatsby"
import About from "../components/about"
import OurServices from "../components/ourServices"

export default () => {
  return (
    <Layout>
      <Hero>
        <Banner
          title="travel well. trawell"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quibusdam?"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </Hero>

      <About />
      <OurServices />
    </Layout>
  )
}
