import React from 'react';
import { getString } from '../lib/richText';
import { P } from '../style/typography';

export default function ProjectPage({ projectData }) {
  const { title } = projectData;
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <P>Story</P>
      {getString(title)}
    </div>
  );
}
