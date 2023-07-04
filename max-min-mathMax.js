// max of 3 digits using Math.max
function maxOfThree(num1, num2, num3) {
  const maxNumber = Math.max(num1, num2, num3);
  return maxNumber;
}

const maxNumberOf3 = maxOfThree(12, 50, 15);
console.log(maxNumberOf3);

// min of 3 digits using Math.min
function minOfThree(num1, num2, num3) {
  const minNumber = Math.min(num1, num2, num3);
  return minNumber;
}

const minNumberOf3 = minOfThree(2, 5, 1);
console.log(minNumberOf3);
