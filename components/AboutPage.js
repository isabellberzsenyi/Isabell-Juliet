import React from 'react';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';
import { getString } from '../lib/richText';
import { H1, H3 } from '../style/typography';
import FooterLink from './footer/footer-link/FooterLink';

export default function AboutPage({ aboutPageData, navigationData, footerData }) {
  const { about_title: title, about_bio: aboutBio } = aboutPageData;
  const {
    email: { url: emailLink },
    linkedin_link: { url: linkedInLink },
    github_link: { url: gitHubLink },
  } = footerData;

  return (
    <>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <div
        style={{
          width: '50%',
          margin: 'auto',
          marginTop: '5em',
        }}
      >
        <H1>{getString(title).toUpperCase()}</H1>
        <H3>HI I'M IZZY</H3>
        <div style={{ textAlign: 'justify' }}>{getString(aboutBio)}</div>
        <div>
          <H3 style={{ letterSpacing: '0.13em', marginTop: '1em', marginBottom: '0.25em' }}>
            LET'S CONNECT
          </H3>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <FooterLink label="Email " link={emailLink} light={true} />
            <FooterLink label="LinkedIn " link={linkedInLink} light={true} />
            <FooterLink label="GitHub" link={gitHubLink} light={true} />
          </div>
        </div>
      </div>
      <Footer footerData={footerData} />
    </>
  );
}
