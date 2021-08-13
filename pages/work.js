import WorkPage from '../components/WorkPage';
import { getFooter, getNavigation, getProjects, getWorkPage } from '../lib/api';
import { getString } from '../lib/richText';

export default function Work({ workPageData, projectsData, footerData, navigationData }) {
  return (
    <WorkPage
      navigationData={navigationData}
      workPageData={workPageData}
      projectsData={projectsData}
      footerData={footerData}
    />
  );
}

export async function getStaticProps() {
  const workPageData = await getWorkPage();
  const projectsData = await getProjects();
  const footerData = await getFooter();
  const navigationData = await getNavigation();

  return {
    props: {
      workPageData,
      projectsData,
      footerData,
      navigationData,
    },
  };
}
