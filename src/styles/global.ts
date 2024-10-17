import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const reset = css` 
  ${emotionReset} 

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0 auto;
    font-family:
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
    font-size: 62.5%;
  }

  body {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;
