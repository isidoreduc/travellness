import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import StyledHero from '../components/styledHero';
import styles from '../css/template.module.css';
import Image from 'gatsby-image';
// import AniLink from 'gatsby-plugin-transition-link';
import { Link } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import video from 'video.js';
import playback from 'videojs-playbackrate-adjuster';
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';
// import Markdown from 'react-markdown/with-html';

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
    // slug,
    readingTime,
    mediaFiles,
    writtenBy,
    content: { json },
    // description,
  } = data.intv;

  const [mainImage, ...allImages] = mediaFiles;

  // content.json rendering options
  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return node.data.target.fields.file['en-US'].contentType ===
          'video/mp4' ? (
          <video
            class="video-js"
            width="600"
            controls
            canControlPlaybackRate
            src={node.data.target.fields.file['en-US'].url}
            type="video/mp4"
            data-setup='{"controls": true, "autoplay": false, "preload": "auto", "playbackSpeeds": [.5, 1, 1.5]}'
          ></video>
        ) : (
          <img
            width="400"
            src={node.data.target.fields.file['en-US'].url}
            alt="here there should be an image"
          ></img>
        );
      },
    },
  };
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
          {/* <Markdown
            escapeHtml={false}
            source={description.description}
            className={styles.desc}
          /> */}
          <div className={styles.desc}>
            {documentToReactComponents(json, options)}
          </div>
          <Link to="/tours" className="btn-primary">
            back to interviews
          </Link>
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
