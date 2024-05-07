import { isCompositeNumber } from "./isCompositeNumber";
import { isPrime } from "./isPrime";

export function listRange(start:number, end:number, flag:string) {
    let primeNumbers = [];

    for (let i = start; i <= end; i++) {
      if(flag === 'prime') {
        if (isPrime(i)) {
          primeNumbers.push(i);
        }
      }else if(flag === 'composit'){
        if (isCompositeNumber(i)) {
          primeNumbers.push(i);
        }
      }
    }
    return primeNumbers;
  }