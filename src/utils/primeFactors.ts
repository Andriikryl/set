export function primeFactors(n: number): number[] {
    const factors: number[] = [];
  
    while (n % 2 == 0) {
      factors.push(2);
      n = n / 2;
    }
  
    let divisor = 3;
    while (n >= divisor * divisor) {
      while (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      }
      divisor += 2;
    }
  
    if (n > 2) {
      factors.push(n);
    }
  
    return factors;
  }