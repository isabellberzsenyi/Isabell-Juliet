import { getFooter, getHomePage, getNavigation } from '../lib/api';
import React from 'react';
import Navigation from '../components/navigation/Navigation';
import { getString } from '../lib/richText';

export default function Home({ navigationData, homePageData, footerData }) {
  const { home_page_title: title } = homePageData;
  return (
    <div>
      <Navigation navigationData={navigationData} footerData={footerData} />
      {getString(title)}
    </div>
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
