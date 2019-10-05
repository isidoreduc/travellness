import React from 'react';
import Image from 'gatsby-image';
import styles from '../../css/tour.module.css';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FaFingerprint } from 'react-icons/fa';
import { Link } from 'gatsby';

const Interview = ({ interview }) => {
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={interview.mediaFiles[0].fluid} className={styles.img} />
        <Link className={styles.link} to={`/tours/${interview.slug}`}>
          details
        </Link>
      </div>

      <div className={styles.footer}>
        <h3>{interview.title}</h3>

        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaFingerprint className={styles.icon} />
            {interview.writtenBy}
          </h4>
          <div className={styles.details}>
            <h6>{interview.readingTime} read</h6>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Interview;
