import { useState, useEffect } from 'react';
import { getString } from '../lib/richText';
import PageLink from './PageLink';
import Footer from './Footer';

const currentPage = () => {
  if (typeof window === 'object') {
    const splitUrl = window.location.href.split('/');
    return splitUrl.includes('project') ? 'project' : splitUrl[splitUrl.length - 1] || 'home';
  } else {
    return '';
  }
};

export default function Navigation({ navigationData, footerData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currPage, setCurrPage] = useState('home');

  useEffect(() => {
    setCurrPage(currentPage());
  }, []);

  const getNavigationLinks = () => {
    return navigationData.map((navLink) => {
      return (
        <>
          <NavigationLink navigationLink={navLink} />
          <br />
        </>
      );
    });
  };
  return (
    <>
      {isMenuOpen ? (
        <div>
          <h1 onClick={() => setIsMenuOpen(false)}>CLOSE</h1>
          {getNavigationLinks()}
          <Footer footerData={footerData} />
        </div>
      ) : (
        <h1 onClick={() => setIsMenuOpen(true)}>MENU</h1>
      )}
    </>
  );
}

function NavigationLink({ navigationLink }) {
  const { uid, title, subtitle, link } = navigationLink;
  switch (link.link_type) {
    case 'Document':
      return (
        <>
          <PageLink href={uid === 'home' ? '/' : `/${uid}`}>{getString(title)}</PageLink>/
          {getString(subtitle)}
        </>
      );
    case 'Web':
      return (
        <>
          <a href={link.url} target="_blank" rel="noreferrer">
            {getString(title)}
          </a>
          /{getString(subtitle)}
        </>
      );
    default:
      return null;
  }
}
