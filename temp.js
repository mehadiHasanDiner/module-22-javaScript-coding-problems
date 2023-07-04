let first = 5;
let second = 6;
console.log(first, second);

// wrong approach
// first = second;
// second = first;
// console.log(first, second);

// approach: 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approach: 2 ... Destructuring
[first, second] = [second, first];
console.log(first, second);
