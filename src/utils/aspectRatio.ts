import gcd from './gcd';

const aspectRatio = (width: number, height: number) => {
  const divisor = gcd(width, height);
  return `${width / divisor}:${height / divisor}`;
};

export default aspectRatio;
