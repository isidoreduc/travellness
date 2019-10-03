import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import styles from '../css/template.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link';
import Markdown from 'react-markdown';
import {
  FaFingerprint,
  FaMap,
  FaBookReader,
  FaCalendarAlt,
} from 'react-icons/fa';

const Template = ({ data }) => {
  const {
    title,
    location,
    createdAt,
    slug,
    readingTime,
    mediaFiles,
    writtenBy,
    description,
  } = data.intv;

  const [mainImage, ...allImages] = mediaFiles;

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />

      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.title}>{title}</div>
          <div className={styles.info}>
            <p>
              <FaFingerprint className={styles.icon} />
              {writtenBy}
            </p>
            <p>
              <FaCalendarAlt className={styles.icon} />
              {createdAt}
            </p>
            <p>
              <FaMap className={styles.icon} />
              {location}
            </p>
            <p>
              <FaBookReader className={styles.icon} />
              {readingTime} read
            </p>
          </div>
          <Markdown source={description.description} className={styles.desc} />
          {/* <div className={styles.desc}>{description.description}</div> */}
          <AniLink fade to="/tours" className="btn-primary">
            back to interviews
          </AniLink>
        </div>
      </section>
      <div className={styles.center}>
        <div className={styles.images}>
          {allImages.map((item, index) => (
            <Image key={index} fluid={item.fluid} className={styles.image} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

// always remember to pass the fluid fragments
export const query = graphql`
  query($singleSlug: String!) {
    intv: contentfulInterviews(slug: { eq: $singleSlug }) {
      title
      location
      contentful_id
      createdAt(formatString: "ddd, MMM Do, YY")
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
      description {
        description
      }
    }
  }
`;

export default Template;
