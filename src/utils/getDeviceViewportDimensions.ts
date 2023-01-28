import aspectRatio from './aspectRatio';
import type { Dimensions } from '@/types';

const getDeviceViewportDimensions = (): Dimensions => {
  const { width, height } = screen;
  return {
    width,
    height,
    aspectRatio: aspectRatio(width, height),
  };
};

export default getDeviceViewportDimensions;
