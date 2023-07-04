// max of 3 digits using if else
function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    console.log("number a is bigger");
  } else if (b > c && b > a) {
    console.log("number b is bigger");
  } else {
    console.log("number c is bigger");
  }
}

maxOfThree(102, 109, 93);

// min of 3 digits using if else
function minOfThree(a, b, c) {
  if (a < b && a < c) {
    console.log("number a is smaller");
  } else if (b < c && b < a) {
    console.log("number b is smaller");
  } else {
    console.log("number c is smaller");
  }
}

minOfThree(3, 2, 12);
