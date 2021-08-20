import { getFooter, getHomePage, getNavigation } from '../lib/api';
import React from 'react';
import Navigation from '../components/navigation/Navigation';

export default function Home({ navigationData, homePageData, footerData }) {
  const { home_page_image: image } = homePageData;
  return (
    <div>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <img src={image.url} alt={image.alt} width={'20%'} />
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
