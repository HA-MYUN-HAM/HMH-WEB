import { Theme } from '@emotion/react';

const color = {
  primary: '#002B1A',
  secondary: '#7FE241',
  black: '#161616',
  white:'#ffffff',
  red: '#ff5d41',

  grey100:'#f1f2ee',
  grey300:'#dde0d5',
  grey500:'#9fa499',
  grey900: '#2d2f2d'
};

interface Font {
  family: string;
  weight: number;
  size: number;
  height: string;
}
  
const FONT = ({ family, weight, size, height }: Font): string => {
  return `
      font-family:${family};
      font-weight:${weight};
      font-size:${size}rem;
      line-height: ${height}; 
      `;
};

const fonts = {
  head01: FONT({
    family: 'Pretendard',
    weight: 700,
    size: 3.2,
    height: 'normal',
  }), 
  head02: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 2.4,
    height: 'normal',
  }), 
  head03: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 2,
    height: 'normal',
  }), 
  head04: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 1.8,
    height: 'normal',
  }), 
  head05: FONT({
    family: 'Pretendard',
    weight: 600,
    size: 1.6,
    height: 'normal',
  }), 
  body01: FONT({
    family: 'Pretendard',
    weight: 500,
    size: 1.8,
    height: 'normal',
  }),
  body02: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.6,
    height: 'normal',
  }),
  body03: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.4,
    height: 'normal',
  }),
  small01: FONT({
    family: 'Pretendard',
    weight: 500,
    size: 1.2,
    height: 'normal',
  }),
  small02: FONT({
    family: 'Pretendard',
    weight: 400,
    size: 1.2,
    height: 'normal',
  }),
};

export type ColorsTypes = typeof color;
export type FontsTypes = typeof fonts;

const theme: Theme = {
  color,
  fonts,
};

export default theme;
