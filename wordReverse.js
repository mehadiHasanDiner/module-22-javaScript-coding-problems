// // word reverse
// function reverseString(text) {
//   let words = text.split(" ");
//   const result = [];
//   for (let i = words.length - 1; i >= 0; i--) {
//     const elements = words[i];
//     result.push(elements);
//   }
//   const reversed = result.join(" ");
//   return reversed;
// }

// const myString = "I am a good person";
// const reversed = reverseString(myString);
// console.log(reversed);

// another way
function wordReverse(text) {
  const words = text.split(" ");
  const result = [];
  let wordReversed = 0;
  for (i = words.length - 1; i >= 0; i--) {
    const word = words[i];
    result.push(word);
    wordReversed = result.join(" ");
  }
  return wordReversed;
}

const string = "We love cricket";
const fullReversedWord = wordReverse(string);
console.log(fullReversedWord);
