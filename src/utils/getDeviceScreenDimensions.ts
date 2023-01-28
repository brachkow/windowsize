import aspectRatio from './aspectRatio';
import type { Dimensions } from '@/types';

const getDeviceScreenDimensions = (): Dimensions => {
  let { width, height } = screen;
  const { devicePixelRatio: dpr } = window;

  width = width * dpr;
  height = height * dpr;

  return {
    width,
    height,
    aspectRatio: aspectRatio(width, height),
  };
};

export default getDeviceScreenDimensions;
