import { primeFactors } from "./primeFactors";

export function generateTreeData(number: number): TreeNodeType[] {
    const factors = primeFactors(number);
    return [
      {
        title: number.toString(),
        branch: factors.map((factor) => ({
          title: factor.toString(),
        })),
      },
    ];
  }