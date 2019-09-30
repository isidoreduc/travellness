import React from 'react';
import Title from './title';
import styles from '../css/about.module.css';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const About = () => {
  const { aboutImage } = useStaticQuery(data);
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={aboutImage.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the earth</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            molestias inventore dolore dignissimos consectetur architecto?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
            dicta sed quaerat quidem mollitia possimus similique laborum nam
            excepturi omnis.
          </p>
          <Link className="btn-primary" to="/tours">
            read more
          </Link>
        </article>
      </div>
    </section>
  );
};

const data = graphql`
  {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default About;
