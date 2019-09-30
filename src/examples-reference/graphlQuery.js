import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const GraphlQuery = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(data);
  return (
    <div>
      <h1>author: {siteMetadata.author}</h1>
      <h1>title:{siteMetadata.title}</h1>
    </div>
  );
};

const data = graphql`
  {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`;
export default GraphlQuery;
