import { useState, useEffect } from 'react';
import { getString } from '../../lib/richText';
import PageLink from '../PageLink';
import Footer from '../footer/Footer';
import { fonts, fontWeights } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';

const NavigationWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1em;
  z-index: 100;
  height: 5em;
`;

const MenuOpen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.MUD};
  color: ${colors.BLUSH};
  z-index: 15;
  display: flex;
  justify-content: center;
`;

const LinkWrapper = styled.button`
  display: block;
  background: none;
  border: none;
  text-align: left;
  font-style: ${fonts.notoSans};
  color: ${(props) => (props.selected ? colors.BLUSH : colors.ALMOND)};

  &:hover {
    cursor: pointer;
    color: ${colors.BLUSH};
  }
`;

const MenuTitle = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 0em;
  font-weight: ${fontWeights.medium};
  font-size: 3em;
`;

const MenuSubtitle = styled.p`
  font-weight: ${fontWeights.normal};
  text-transform: lowercase;
  line-height: 0em;
  font-size: 2em;
`;

const MenuOpenCloseWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

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
    return navigationData.map((navLink, index) => {
      return (
        <NavigationLink key={index} navigationLink={navLink} onPage={currPage == navLink.uid} />
      );
    });
  };
  return (
    <NavigationWrapper>
      <h1>BLAH</h1>
      {isMenuOpen ? (
        <MenuOpen>
          <MenuOpenCloseWrapper onClick={() => setIsMenuOpen(false)}>
            <h1>CLOSE</h1>
          </MenuOpenCloseWrapper>
          {getNavigationLinks()}
          <Footer footerData={footerData} />
        </MenuOpen>
      ) : (
        <MenuOpenCloseWrapper
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <h1>MENU</h1>
        </MenuOpenCloseWrapper>
      )}
    </NavigationWrapper>
  );
}

function NavigationLink({ navigationLink, onPage }) {
  const { uid, title, subtitle, link } = navigationLink;
  switch (link.link_type) {
    case 'Document':
      return (
        <LinkWrapper selected={onPage}>
          <PageLink href={uid === 'home' ? '/' : `/${uid}`}>
            <MenuTitle>{getString(title)}</MenuTitle>
          </PageLink>
          <MenuSubtitle>{getString(subtitle)}</MenuSubtitle>
        </LinkWrapper>
      );
    case 'Web':
      return (
        <LinkWrapper selected={onPage}>
          <a href={link.url} target="_blank" rel="noreferrer">
            <MenuTitle>{getString(title)}</MenuTitle>
          </a>
          <MenuSubtitle>{getString(subtitle)}</MenuSubtitle>
        </LinkWrapper>
      );
    default:
      return null;
  }
}
