
import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import heroImage from 'assets/illustrations/Header.png';
import coderImage from 'assets/illustrations/coder.webp';
import coderAnimation from 'assets/illustrations/coding_anim_2.gif'
import { greeting, greetingDescription, linkedinUrl, githubUrl, cvLink } from 'data/config';
import linkedinLogo from 'assets/illustrations/linkedin_logo.png';
import githubLogo from 'assets/illustrations/github_logo.png';
import linkedinLogoWhite from 'assets/illustrations/linkedin_white.png';
import githubLogoWhite from 'assets/illustrations/github_white.png';
import my_image from 'assets/my_photo/my_photo.jpg'
import ReactRoundedImage from "react-rounded-image";
import { IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
            
        <div style={{ display: "flex",marginLeft:'440px',marginTop:'-70px'}}>
          
           {/* <ReactRoundedImage image={my_image} roundedSize="-35" imageWidth="125" imageHeight="100" /> */}
            </div>
         
         <h1>{greeting}</h1>
          <h4>{greetingDescription}</h4>
          <div>
            <Button as={AnchorLink} href="#contact" className="hire-me">
              Hire me
            </Button>{' '}
            <a href={cvLink} target="_blank" rel="noreferrer">
              <Button className="view-cv">View CV</Button>
            </a>
          </div>
          <div className="social">
            {' '}
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? linkedinLogo : linkedinLogoWhite} alt="Linkedin" />
            </a>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <img width="45" src={theme === 'light' ? githubLogo : githubLogoWhite} alt="GitHub" />
            </a>
          </div>
        </Details>
        <Thumbnail>
          {/* <img src={heroImage} alt="Crio.Do" /> */}
           <img style={{ borderRadius: "50px"}} src={coderAnimation} alt="a humble coder coding" /> 
        </Thumbnail>      
      </IntroWrapper>
    </div>
  );
};
