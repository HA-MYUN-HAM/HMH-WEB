import '@emotion/react';
import { ColorsTypes, FontsTypes } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorsTypes;
    fonts: FontsTypes;
  }
}
