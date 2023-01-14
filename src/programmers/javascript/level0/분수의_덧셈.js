function solution(numer1, denom1, numer2, denom2) {
    const denom = (denom2 * numer1) + (denom1 * numer2);
    const numer = denom1 * denom2;
      
    const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
      
    const gcd = getGCD(denom, numer);
      
    return [denom / gcd, numer / gcd];
  }