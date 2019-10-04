import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import styles from '../css/template.module.css';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import Markdown from 'react-markdown/with-html';

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
    content,
    description,
  } = data.intv;

  const [mainImage, ...allImages] = mediaFiles;

  // const Bold = ({ children }) => <span className="bold">{children}</span>;
  // const Text = ({ children }) => <p className="align-center">{children}</p>;
  // // content.json rendering options
  // const options = {
  //   // renderMark: {
  //   //   [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  //   // },
  //   renderNode: {
  //     'embedded-asset-block': node => {
  //       return node.data.target.fields.file['en-US'].contentType ===
  //         'video/mp4' ? (
  //         <video
  //           width="400"
  //           src={node.data.target.fields.file['en-US'].url}
  //         ></video>
  //       ) : (
  //         <img
  //           width="400"
  //           src={node.data.target.fields.file['en-US'].url}
  //         ></img>
  //       );
  //     },

  //     // [BLOCKS.QUOTE]: (node, children) => <Text>{children}</Text>,
  //   },
  // };

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
          <Markdown
            escapeHtml={false}
            source={description.description}
            className={styles.desc}
          />
          {/* <div className={styles.desc}>{documentToReactComponents(json)}</div> */}
          <AniLink to="/tours" className="btn-primary" fade="true">
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
          ...GatsbyContentfulFluid_withWebp
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
      content {
        json
      }
    }
  }
`;

export default Template;
