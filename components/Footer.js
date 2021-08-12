import { getString } from '../lib/richText';

export default function Footer({ footerData }) {
  const {
    footer_text: footerText,
    email,
    linkedin_link: linkedIn,
    github_link: gitHub,
  } = footerData;

  return (
    <>
      <div>{getString(footerText)}</div>
      <a href={email.url} target="_blank" rel="noreferrer">
        EMAIL
      </a>
      <a href={linkedIn.url} target="_blank" rel="noreferrer">
        LINKEDIN
      </a>
      <a href={gitHub.url} target="_blank" rel="noreferrer">
        GITHUB
      </a>
    </>
  );
}
