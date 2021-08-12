import AboutPage from '../components/AboutPage';
import { getAboutPage, getNavigation, getFooter } from '../lib/api';

export default function About({ aboutPageData, footerData, navigationData }) {
  return (
    <AboutPage
      aboutPageData={aboutPageData}
      navigationData={navigationData}
      footerData={footerData}
    />
  );
}

export async function getStaticProps() {
  const aboutPageData = await getAboutPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      aboutPageData,
      footerData,
      navigationData,
    },
  };
}
