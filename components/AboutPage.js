import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';
import { getString } from '../lib/richText';
import { H1, H3, P } from '../style/typography';
import FooterLink from './footer/footer-link/FooterLink';
import styled from 'styled-components';

const AboutPageContainer = styled.div`
  width: 50%;
  margin: auto;
  margintop: 5em;
`;

const AboutLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const AboutBioWrapper = styled.div`
  text-align: justify;
`;

const AboutSubtitle = styled(H3)`
  letter-spacing: 0.13em;
  margin-top: 1em;
  margin-bottom: 0.25em;
`;

export default function AboutPage({ aboutPageData, navigationData, footerData }) {
  const { about_title: title, about_bio: aboutBio } = aboutPageData;
  const {
    email: { url: emailLink },
    linkedin_link: { url: linkedInLink },
    github_link: { url: gitHubLink },
  } = footerData;

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <AboutPageContainer>
        <H1>{getString(title).toUpperCase()}</H1>
        {/* <H3>HI I'M IZZY</H3> */}
        <AboutBioWrapper>
          <P>{getString(aboutBio)}</P>
        </AboutBioWrapper>
        <div>
          <AboutSubtitle>LET'S CONNECT</AboutSubtitle>
          <AboutLinkWrapper>
            <FooterLink label="Email " link={emailLink} light={true} />
            <FooterLink label="LinkedIn " link={linkedInLink} light={true} />
            <FooterLink label="GitHub" link={gitHubLink} light={true} />
          </AboutLinkWrapper>
        </div>
      </AboutPageContainer>
      <Footer footerData={footerData} />
    </div>
  );
}
