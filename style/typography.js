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
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  color: ${colors.RASPBERRY};
  letter-spacing: 0.13em;

  font-size: 6em;
  @media ${min.tablet} {
    font-size: 10.5em;
  }
  @media ${min.desktop} {
    font-size: 10em;
  }
`;

const H2 = styled.h2`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  letter-spacing: 0.13em;
  font-size: 2em;
  @media ${min.tablet} {
    font-size: 2.6em;
  }
`;

const H3 = styled.h3`
  font-family: ${fonts.notoSans};
  font-weight: ${fontWeights.normal};
  font-size: clamp(1.5em, 6vw, 2em);
  color: ${colors.ALMOND};
`;

const H4 = styled.h3`
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
