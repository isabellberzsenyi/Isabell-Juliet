import styled from 'styled-components';
import { colors } from './colors';
import { min, max } from '../lib/responsive';

const fonts = {
  notoSans: `'Noto Sans', sans-serif`,
};

const fontWeights = {
  normal: 400,
  bold: 700,
};

const H1 = styled.h1`
  margin-bottom: 0.5em;
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  color: ${colors.RASPBERRY};
  letter-spacing: 0.13em;

  font-size: 2.5em;
  @media ${min.tablet} {
    font-size: 4.5em;
  }
  @media ${min.desktop} {
    font-size: 4em;
  }
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  letter-spacing: 0.13em;
  font-size: 2em;
  @media ${min.tablet} {
    font-size: 2.6em;
  }
`;

const H3 = styled.h3`
  padding: 0;
  margin-bottom: 0.25em;
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  font-size: clamp(1.5em, 6vw, 2em);
  color: ${colors.ALMOND};
`;

const H4 = styled.h4`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  color: ${colors.CHOCOLATE};
  letter-spacing: 0.13em;
  font-size: 1em;
`;

const P = styled.p`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  color: ${colors.MUD};
  font-size: 1em;
  line-height: 1.8em;
`;

export { fonts, fontWeights, P, H1, H2, H3, H4 };
