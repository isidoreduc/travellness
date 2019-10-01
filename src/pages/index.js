import React from 'react';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import Banner from '../components/banner';
import { Link, graphql, useStaticQuery } from 'gatsby';
import About from '../components/about';
import OurServices from '../components/ourServices';

export default () => {
  const { homeImage } = useStaticQuery(data);

  return (
    <Layout>
      <StyledHero img={homeImage.childImageSharp.fluid} home>
        <Banner
          title="travel well. trawell"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quibusdam?"
        >
          <Link to="/tours" className="btn-white">
            explore tours
          </Link>
        </Banner>
      </StyledHero>

      <About />
      <OurServices />
    </Layout>
  );
};

const data = graphql`
  {
    homeImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
