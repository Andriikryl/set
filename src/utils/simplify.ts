export function simplify(str: string) {
    var result = "",
      data = str.split("/"),
      numOne = Number(data[0]),
      numTwo = Number(data[1]);
    for (var i = Math.max(numOne, numTwo); i > 1; i--) {
      if (numOne % i == 0 && numTwo % i == 0) {
        numOne /= i;
        numTwo /= i;
      }
    }
    if (numTwo === 1) {
      result = numOne.toString();
    } else {
      result = `${numOne}/${numTwo}`;
    }
    return result;
  }