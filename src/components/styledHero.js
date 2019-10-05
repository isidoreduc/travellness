import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

// props: img for the actual image, className for styled components, children - to be able to display elements inside the img component, home - boolean to render the image differently
const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${props =>
    props.home
      ? // ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
        'linear-gradient(rgba(255, 92, 91, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
