import { getString } from '../../lib/richText';
import { fonts, fontWeights } from '../../style/typography';
import styled from 'styled-components';
import { colors } from '../../style/colors';
import FooterLink from './footer-link/FooterLink';

const FooterContainer = styled.div`
  position: absolute;
  padding-top: 2em;
  padding-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
  border-top: 2px solid ${colors.BLUSH};
  width: 100%;
  bottom: 0;
  right: 0;
  display: flex;
  flex: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

const FooterText = styled.p`
  color: ${colors.ALMOND};
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
      <FooterLinkWrapper>
        <FooterLink label="Email" link={emailLink} />
        <FooterLink label="LinkedIn" link={linkedInLink} />
        <FooterLink label="GitHub" link={gitHubLink} />
      </FooterLinkWrapper>
    </FooterContainer>
  );
}
