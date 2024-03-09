import { getFooter, getHomePage, getNavigation } from '../lib/api';
import React from 'react';
import HomePage from '../components/HomePage';

export default function Home({ navigationData, homePageData, footerData }) {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <div
        style={{
          width: '100%',
          paddingTop: '8em',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        work in progress
      </div>
    </div>
    // <HomePage navigationData={navigationData} homePageData={homePageData} footerData={footerData} />
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const navigationData = await getNavigation();
  const footerData = await getFooter();

  return {
    props: {
      homePageData,
      navigationData,
      footerData,
    },
  };
}
