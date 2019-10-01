import React from 'react';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import { graphql } from 'gatsby';

// getting image using props, as opposed to hook useStaticQuery
const Tours = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.homeImage.childImageSharp.fluid}></StyledHero>
    </Layout>
  );
};

export const query = graphql`
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

export default Tours;
