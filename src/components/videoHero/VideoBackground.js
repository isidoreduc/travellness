import React from 'react';
import styles from '../../css/videoBackground.module.css';
import Banner from '../banner';
import { Link } from 'gatsby';

const VideoBackground = ({ src, type, children }) => {
  return (
    <div className={styles.section}>
      <div className={styles.children}>{children}</div>
      <div className={styles.videoContainer}>
        <div className={styles.colorOverlay}></div>
        <video autoPlay loop muted>
          <source src={src} type={type} />
        </video>
      </div>
    </div>
  );
};

export default VideoBackground;
