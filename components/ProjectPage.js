import React from 'react';
import { getString } from '../lib/richText';

export default function ProjectPage({ projectData }) {
  const { title } = projectData;
  return (
    <div>
      <p>Story</p>
      {getString(title)}
    </div>
  );
}
