import React from 'react';
import Layout from '../components/layout';
import styles from '../css/error.module.css';
import Banner from '../components/banner';
import { Link } from 'gatsby';

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Ooops, 404, cul de sac.">
          <Link to="/" className="btn-white">
            back is were home is
          </Link>
        </Banner>
      </header>
    </Layout>
  );
};

export default Error;
