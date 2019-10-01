import React from 'react';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import Banner from '../components/banner';
import { graphql, useStaticQuery } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
          <AniLink fade to="/tours" className="btn-white">
            explore tours
          </AniLink>
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
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
