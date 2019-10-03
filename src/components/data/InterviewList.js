import React, { useState, useEffect } from 'react';
import Interview from './Interview';
import styles from '../../css/items.module.css';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Title from '../../components/title';

const InterviewList = ({ allInterv }) => {
  const [interviews, setInterviews] = useState([]);
  const [sortedInterviews, setSortedInterviews] = useState([]);

  useEffect(() => {
    setInterviews(...interviews, allInterv.edges);
    setSortedInterviews(...sortedInterviews, allInterv.edges);
  }, []);

  return (
    <section className={styles.tours}>
      <Title title="anthropoetry" subtitle="interviews" />
      <div className={styles.center}>
        {sortedInterviews.map(({ node }) => (
          <Interview key={node.contentful_id} interview={node} />
        ))}
      </div>
    </section>
  );
};

export default InterviewList;
