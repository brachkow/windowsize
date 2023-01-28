import aspectRatio from './aspectRatio';
import type { Dimensions } from '@/types';

const getBrowserViewportDimensions = (): Dimensions => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
    aspectRatio: aspectRatio(width, height),
  };
};

export default getBrowserViewportDimensions;
