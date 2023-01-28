const gcd = (a: number, b: number): number => (!b ? a : gcd(b, a % b));

export default gcd;
