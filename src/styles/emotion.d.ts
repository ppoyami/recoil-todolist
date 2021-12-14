import '@emotion/react';
import { IColor } from '@/styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    colors: IColor;
  }
}
