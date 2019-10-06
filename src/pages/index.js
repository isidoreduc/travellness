import { Link } from 'gatsby';
import React from 'react';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';
import About from '../components/about';
import Banner from '../components/banner';
import FeaturedInterviews from '../components/FeaturedInterviews';
import Layout from '../components/layout';
import OurServices from '../components/ourServices';
import StyledHeroVideo from '../components/StyledHeroVideo';
import videoHero from '../videos/anthropomovie.mp4';
export default () => {
  // uncomment if you use the StyledHero again
  // const { homeImage } = useStaticQuery(data);

  return (
    <Layout>
      {/* <StyledHero img={homeImage.childImageSharp.fluid} home>
        <Banner
          title="anthropoetry"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quibusdam?"
        >
          <Link to="/tours" className="btn-white">
            explore
          </Link>
        </Banner>
      </StyledHero> */}

      <StyledHeroVideo src={videoHero} type="video/mp4">
        <Banner
          title="anthropoetry"
          info="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quibusdam?"
        >
          <Link to="/tours" className="btn-white">
            explore
          </Link>
        </Banner>
      </StyledHeroVideo>

      <FeaturedInterviews />
      <OurServices />
      <About />
    </Layout>
  );
};

// uncomment if you use the StyledHero again
// const data = graphql`
//   {
//     homeImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid_tracedSVG
//         }
//       }
//     }
//   }
// `;
