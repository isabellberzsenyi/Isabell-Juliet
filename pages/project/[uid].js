import React from 'react';
import { getProjects, getProject } from '../../lib/api';
import { getString } from '../../lib/richText';

export default function Project({ projectData }) {
    const { title, description } = projectData;
    return (
        <div>
            <p>Story</p>
            {getString(title)}
        </div>
    );
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
