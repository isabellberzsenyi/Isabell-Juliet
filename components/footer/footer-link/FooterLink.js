import { fonts, fontWeights } from '../../../style/typography';
import styled from 'styled-components';
import { colors } from '../../../style/colors';

const FooterLinkContainer = styled.div`
  margin-left: 1em;
`;
const FooterLinkWrapper = styled.a`
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  margin: 0;
`;
const FooterLinkText = styled.p`
  color: ${colors.BLUSH};
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export default function FooterLink({ label, link }) {
  return (
    <FooterLinkContainer>
      <FooterLinkWrapper href={link} target="_blank" color={colors.FRESHSNOW}>
        <FooterLinkText>{label}</FooterLinkText>
      </FooterLinkWrapper>
    </FooterLinkContainer>
  );
}
