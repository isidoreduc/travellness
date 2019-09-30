import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import img from '../images/connectBcg.jpeg';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ImageFrame = () => {
  const { fixed, fluid } = useStaticQuery(data);

  return (
    <Wrapper>
      <article>
        <h3>basic image</h3>
        <img className="basic" src={img} alt="" />
      </article>
      <article>
        <h3>fixed image/ blur</h3>
        <Img fixed={fixed.childImageSharp.fixed} />
      </article>
      <article>
        <h3>fluid image/ svg</h3>
        <Img fluid={fluid.childImageSharp.fluid} />
      </article>
    </Wrapper>
  );
};

// styled component
const Wrapper = styled.div`
  text-align: center;
  width: 80vw;
  margin: 0 auto 10rem auto;
  article {
    border: 2px solid indigo;
    border-radius: 3px;
    padding: 5px;
    margin: 0 0 1rem;
  }
  .basic {
    width: 100%;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

// graphql query
const data = graphql`
  {
    fixed: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fixed(width: 300, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "blogBcg.jpeg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default ImageFrame;
