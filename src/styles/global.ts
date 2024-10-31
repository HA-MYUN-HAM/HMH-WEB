import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const reset = css` 
  ${emotionReset} 

  * {
    max-width: 90rem;
    box-sizing: border-box;
  }

  #root, body, html {
    margin: 0 auto;

    max-width: 90rem;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }

  html {
    -webkit-touch-callout: none;
    scroll-behavior: smooth;

    display: flex;
    justify-content: center;

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

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  ul,li {
    list-style: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
  }

  input, button {
    outline: none;
  }

  input {
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }
`;
