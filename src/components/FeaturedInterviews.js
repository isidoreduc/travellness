import React from 'react';
import Interview from './data/Interview';
import { graphql, useStaticQuery } from 'gatsby';
import styles from '../css/items.module.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Title from '../components/title';

const FeaturedInterviews = () => {
  const response = useStaticQuery(getFeaturedInterviews);
  const interviews = response.featuredInterviews.edges;

  console.log(interviews);
  return (
    <section className={styles.tours}>
      <Title title="Featured" subtitle="interviews" />
      <div className={styles.center}>
        {/* destructuring the interviews object and getting the node atribute that has all the info needed */}
        {interviews.map(({ node }) => (
          <Interview key={node.contentful_id} interview={node} />
        ))}
      </div>
      <AniLink fade to="/tours" className="btn-primary">
        all articles
      </AniLink>
    </section>
  );
};

const getFeaturedInterviews = graphql`
  query {
    featuredInterviews: allContentfulInterviews(
      filter: { featured: { eq: true } }
    ) {
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
          author {
            firstName
            lastName
          }
          writtenBy
        }
      }
    }
  }
`;

export default FeaturedInterviews;
