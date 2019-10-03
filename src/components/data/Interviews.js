import React from 'react';
import InterviewList from './InterviewList';
import { graphql, useStaticQuery } from 'gatsby';

const Interviews = () => {
  const { allInterviews } = useStaticQuery(interviews);
  return (
    <div>
      <InterviewList allInterv={allInterviews} />
    </div>
  );
};

const interviews = graphql`
  query {
    allInterviews: allContentfulInterviews {
      edges {
        node {
          title
          location
          contentful_id
          createdAt
          slug
          readingTime
          mediaFiles {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          writtenBy
        }
      }
    }
  }
`;

export default Interviews;
