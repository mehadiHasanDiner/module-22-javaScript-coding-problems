const result = Math.pow(3, 2);
// console.log(result);

const age1 = 44;
const age2 = 45;

// const gap = age1 - age2;
const gap = Math.abs(age1 - age2);
if (gap < 5) {
  console.log("stay closer");
} else {
  console.log("stay apart");
}

const number = 2.565;
const fullNumber = Math.round(number);
// console.log(fullNumber);

const number2 = Math.ceil(2.0001);
// console.log(number2);

const number3 = Math.floor(2.93);
// console.log(number3);

// Random --------------------------------
// console.log(Math.random());
for (let i = 0; i < 20; i++) {
  const random = Math.round(Math.random() * 1000);
  console.log(random);
}
