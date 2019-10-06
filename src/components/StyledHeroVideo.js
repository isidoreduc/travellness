import React from 'react';
import VideoBackground from './videoHero/VideoBackground';
import styled from 'styled-components';

// props: img for the actual image, className for styled components, children - to be able to display elements inside the img component, home - boolean to render the image differently
const StyledHeroVideo = ({ src, className, children, type }) => {
  return (
    <VideoBackground className={className} src={src} type={type}>
      {children}
    </VideoBackground>
  );
};

// uses prop home to distinguish between home hero or same image used on other sections of the site
export default styled(StyledHeroVideo)`
  min-height: calc(100vh - 62px);
  background: linear-gradient(rgba(255, 92, 91, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
