import React from 'react';
import { getString } from '../lib/richText';

export default function Project({ projectData }) {
  const { title, description } = projectData;
  return (
    <div>
      <div>{getString(title)}</div>
      <div>{getString(description)}</div>
    </div>
  );
}
