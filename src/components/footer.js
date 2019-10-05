import React from 'react';
import styles from '../css/footer.module.css';
import links from '../constants/links';
import icons from '../constants/social-icons';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';

const footer = () => {
  return (
    <footer className={styles.footer}>
      {/* the links */}
      <div className={styles.links}>
        {links.map((item, index) => (
          <Link key={index} to={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      {/* social media icons */}
      <div className={styles.icons}>
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        {new Date().getFullYear()} &copy; anthropoetry
      </div>
    </footer>
  );
};

export default footer;
