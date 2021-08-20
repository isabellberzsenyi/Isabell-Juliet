import { getString } from '../lib/richText';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';
import PageLink from './PageLink';

export default function WorkPage({ workPageData, projectsData, navigationData, footerData }) {
  const { work_page_title: title, work_page_description: description } = workPageData;

  const ProjectPreviews = projectsData.map((project) => {
    const projectUrl = '/project/' + project.uid;
    return (
      <div>
        <PageLink href={projectUrl}>{getString(project.title)}</PageLink>
        <br />
        {getString(project.description)}
      </div>
    );
  });
  return (
    <div>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <div>{getString(title)}</div>
      <div>{getString(description)}</div>
      <br />
      {ProjectPreviews}
      <br />
      <Footer footerData={footerData} />
    </div>
  );
}
