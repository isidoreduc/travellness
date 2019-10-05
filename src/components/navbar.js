import React, { useState } from 'react';
import styles from '../css/navbar.module.css';
import { FaAlignRight } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../images/letterA2.png';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { Link } from 'gatsby';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(open => !open);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link to="/">
            <img className={styles.navLogo} src={logo} alt="logo" />
          </Link>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <ul className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
