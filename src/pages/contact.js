import React from 'react';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import { graphql, useStaticQuery } from 'gatsby';
import ContactForm from '../components/Contact';

const Contact = () => {
  const { contactImage } = useStaticQuery(data);

  return (
    <Layout>
      <StyledHero img={contactImage.childImageSharp.fluid}></StyledHero>
      <ContactForm />
    </Layout>
  );
};

const data = graphql`
  {
    contactImage: file(relativePath: { eq: "connectBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;
export default Contact;
