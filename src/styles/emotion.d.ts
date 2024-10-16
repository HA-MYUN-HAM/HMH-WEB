import '@emotion/react';
import { ColorsTypes, EffectType, FontsTypes } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color : ColorsTypes;
    fonts : FontsTypes;
    effect: EffectType;
  }
}
