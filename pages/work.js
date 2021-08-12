import WorkPage from '../components/WorkPage';
import { getFooter, getNavigation, getWorkPage } from '../lib/api';
import { getString } from '../lib/richText';

export default function Work({ workPageData, footerData, navigationData }) {
  return (
    <WorkPage navigationData={navigationData} workPageData={workPageData} footerData={footerData} />
  );
}

export async function getStaticProps() {
  const workPageData = await getWorkPage();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      workPageData,
      footerData,
      navigationData,
    },
  };
}
