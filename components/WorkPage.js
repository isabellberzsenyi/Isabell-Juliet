import React from 'react';
import { getString } from '../lib/richText';
import Navigation from './navigation/Navigation';
import Footer from './footer/Footer';
import { H1, P } from '../style/typography';
import ProjectCard from './ProjectCard';

export default function WorkPage({ workPageData, projectsData, navigationData, footerData }) {
  const { work_page_title: title, work_page_description: description } = workPageData;

  const ProjectPreviews = projectsData.map((project) => {
    return <ProjectCard projectData={project} key={project.uid} />;
  });
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Navigation navigationData={navigationData} footerData={footerData} />
      <div
        style={{
          width: '50%',
          margin: 'auto',
          marginTop: '5em',
        }}
      >
        <H1>{getString(title).toUpperCase()}</H1>
        <P>{getString(description)}</P>
      </div>
      <br />
      <div style={{ width: '65%', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
        {ProjectPreviews}
      </div>
      <br />
      <Footer footerData={footerData} />
    </div>
  );
}
