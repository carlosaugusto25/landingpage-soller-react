declare module '@splidejs/react-splide' {
    import * as React from 'react';
    import { SplideProps } from '@splidejs/splide';
  
    export const Splide: React.FC<SplideProps>;
    export const SplideSlide: React.FC<React.HTMLProps<HTMLDivElement>>;
  }