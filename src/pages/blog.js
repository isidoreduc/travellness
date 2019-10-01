import React from 'react';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import { graphql, useStaticQuery } from 'gatsby';

const Blog = () => {
  const { blogImage } = useStaticQuery(data);
  return (
    <Layout>
      <StyledHero img={blogImage.childImageSharp.fluid}></StyledHero>
    </Layout>
  );
};

const data = graphql`
  {
    blogImage: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default Blog;
