import React from 'react';
import Layout from '../components/layout';
import styles from '../css/error.module.css';
import Hero from '../components/hero';
import Banner from '../components/banner';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Ooops, 404, cul de sac.">
          <AniLink fade to="/" className="btn-white">
            back is were home is
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default Error;
