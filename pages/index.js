import { getFooter, getHomePage, getNavigation } from '../lib/api';
import React from 'react';
import HomePage from '../components/HomePage';

export default function Home({ navigationData, homePageData, footerData }) {
  return (
    <HomePage navigationData={navigationData} homePageData={homePageData} footerData={footerData} />
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
