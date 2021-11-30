import React from 'react';
import Navigation from './navigation/Navigation';
import styled from 'styled-components';
import Footer from './footer/Footer';
import { getString } from '../lib/richText';
import { H3 } from '../style/typography';
import { colors } from '../style/colors';

const HomeTitle = styled(H3)`
  border-top: 2px solid ${colors.ALMOND};
  padding-top: 1em;
`;

export default function HomePage({ navigationData, homePageData, footerData }) {
  const { home_page_title: title } = homePageData;
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <div
        style={{
          width: '50%',
          margin: 'auto',
          paddingTop: '8em',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '10vh',
        }}
      >
        <H3 style={{ color: colors.RASPBERRY }}>isabell berzsenyi</H3>
        <HomeTitle>{getString(title)}</HomeTitle>
      </div>
      <Footer footerData={footerData} />
    </div>
  );
}
