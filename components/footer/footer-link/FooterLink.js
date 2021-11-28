import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../style/colors';
import { H4 } from '../../../style/typography';

const FooterLinkContainer = styled.div`
  margin-right: 1em;
`;
export const FooterLinkWrapper = styled.a`
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;
  margin: 0;
`;
const FooterLinkText = styled(H4)`
  color: ${(props) => (props.light ? colors.MUD : colors.BLUSH)};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin: 0;
  &:hover {
    --shadow: ${(props) => (props.selected ? '0' : '0.02em')};
    --neg-shadow: calc(-1 * var(--shadow));

    text-shadow: var(--neg-shadow) var(--neg-shadow) 0
        ${(props) => (props.light ? colors.MUD : colors.BLUSH)},
      var(--shadow) var(--neg-shadow) 0 ${(props) => (props.light ? colors.MUD : colors.BLUSH)},
      var(--neg-shadow) var(--shadow) 0 ${(props) => (props.light ? colors.MUD : colors.BLUSH)},
      var(--shadow) var(--shadow) 0 ${(props) => (props.light ? colors.MUD : colors.BLUSH)};
    transition: all 0.5s;
  }
`;

export default function FooterLink({ label, link, light }) {
  return (
    <FooterLinkContainer>
      <FooterLinkWrapper href={link} target="_blank">
        <FooterLinkText light={light}>{label}</FooterLinkText>
      </FooterLinkWrapper>
    </FooterLinkContainer>
  );
}
