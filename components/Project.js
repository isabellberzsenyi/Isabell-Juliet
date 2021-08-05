import { getString } from '../lib/richText';

function Project({ projectData }) {
  const {
    title, 
    description
  } = projectData;

  return (
    <div>
    <div>{getString(title)}</div>
    <div>{getString(description)}</div>
    </div>
  )
}

export default Project;