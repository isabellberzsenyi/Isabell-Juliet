import React, { useState, useEffect } from 'react';
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
  &:hover {
    cursor: pointer;
  }
`;

const MenuOpen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.CHOCOLATE};
  color: ${colors.BLUSH};
  z-index: 15;
  display: flex;
  flex-direction: column;
`;

const LinkWrapper = styled.button`
  display: block;
  background: none;
  border: none;
  text-align: left;
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
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
    <>
      {isMenuOpen ? (
        <MenuOpen>
          <MenuOpenCloseWrapper onClick={() => setIsMenuOpen(false)}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <h1 style={{ paddingRight: '1em' }}>CLOSE</h1>
            </div>
          </MenuOpenCloseWrapper>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '6em' }}>
            {getNavigationLinks()}
          </div>
          <Footer footerData={footerData} />
        </MenuOpen>
      ) : (
        <NavigationWrapper>
          <PageLink href={'/'}>
            <h2 style={{ color: colors.CHOCOLATE }}>Isabell Juliet</h2>
          </PageLink>
          <MenuOpenCloseWrapper
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <h1 style={{ paddingRight: '0.5em', color: colors.CHOCOLATE }}>MENU</h1>
          </MenuOpenCloseWrapper>
        </NavigationWrapper>
      )}
    </>
  );
}

function NavigationLink({ navigationLink, onPage }) {
  const { uid, title, subtitle, link } = navigationLink;
  switch (link.link_type) {
    case 'Document':
      return (
        <PageLink href={uid === 'home' ? '/' : `/${uid}`}>
          <LinkWrapper
            selected={onPage}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingRight: '2.5em',
              paddingLeft: '2.5em',
            }}
          >
            <MenuTitle>{getString(title)}</MenuTitle>
            <MenuSubtitle>{getString(subtitle)}</MenuSubtitle>
          </LinkWrapper>
        </PageLink>
      );
    case 'Web':
      return (
        <a href={link.url} target="_blank" rel="noreferrer">
          <LinkWrapper
            selected={onPage}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingRight: '2.5em',
              paddingLeft: '2.5em',
            }}
          >
            <MenuTitle>{getString(title)}</MenuTitle>
            <MenuSubtitle>{getString(subtitle)}</MenuSubtitle>
          </LinkWrapper>
        </a>
      );
    default:
      return null;
  }
}
