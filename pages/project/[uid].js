import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import { getProjects, getProject } from '../../lib/api';

export default function Project({ projectData }) {
  return <ProjectPage projectData={projectData} />;
}

export async function getStaticPaths() {
  const projects = await getProjects();
  const paths = projects.map((project) => ({
    params: {
      uid: project.uid,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProject(params.uid);

  return {
    props: {
      projectData,
    },
  };
}
