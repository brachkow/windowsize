import aspectRatio from './aspectRatio';
import type { Dimensions } from '@/types';

const getBrowserWindowDimensions = (): Dimensions => {
  const { outerWidth: width, outerHeight: height } = window;
  return {
    width,
    height,
    aspectRatio: aspectRatio(width, height),
  };
};

export default getBrowserWindowDimensions;
