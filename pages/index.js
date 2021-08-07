import { getHomePage, getProjects, getNavigation, getFooter } from '../lib/api';
import ProjectCard from '../components/ProjectCard';
import React from 'react';

import styles from '../styles/Home.module.css';

export default function Home({ homePageData, projectsData }) {
  return (
    <div className={styles.container}>
      <div>
        {projectsData !== undefined &&
          projectsData.map((p, index) => {
            return <ProjectCard key={index} projectData={p} />;
          })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const homePageData = await getHomePage();
  const projectsData = await getProjects();
  const navigationData = await getNavigation();
  const footerData = await getFooter();

  return {
    props: {
      homePageData,
      projectsData,
      navigationData,
      footerData,
    },
  };
}
