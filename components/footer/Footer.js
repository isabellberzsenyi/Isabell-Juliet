import React from 'react';
import { getString } from '../../lib/richText';
import { P } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import FooterLink from './footer-link/FooterLink';

const FooterContainer = styled.div`
  background-color: ${colors.CHOCOLATE};
  position: absolute;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 2em;
  padding-right: 2em;
  border-top: 2px solid ${colors.BLUSH};
  width: 100%;
  height: 10vh;
  bottom: 0;
  right: 0;
  display: flex;
  flex: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterText = styled(P)`
  color: ${colors.BLUSH};
  margin: 0;
  margin-left: 1em;
  padding: 0;
`;

const FooterLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 1em;
`;
export default function Footer({ footerData }) {
  const {
    footer_text: footerText,
    email: { url: emailLink },
    linkedin_link: { url: linkedInLink },
    github_link: { url: gitHubLink },
  } = footerData;

  return (
    <FooterContainer>
      <FooterText>{getString(footerText)}</FooterText>
      <FooterLinksWrapper>
        <FooterLink label="Email " link={emailLink} />
        <FooterLink label="LinkedIn " link={linkedInLink} />
        <FooterLink label="GitHub" link={gitHubLink} />
      </FooterLinksWrapper>
    </FooterContainer>
  );
}
