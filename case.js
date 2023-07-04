// স্ট্রিং হচ্ছে Array এর মত কিন্ত পুরোপুরি Array এর মত না

// স্ট্রি হচ্ছে immutable, যেট চেঞ্জ করা যায় না বা হয় না।

const userName = "blackPink";
const userInput = "blackPinK";

console.log(userName.toUpperCase());
console.log(userName.toLocaleLowerCase());
// tolocaleLowerCase হচ্ছে কান্ট্রি বা দেশ অনুসারে লোয়ার কেস
if (userName.toLowerCase === userInput.toLowerCase) {
  console.log("valid user name");
} else {
  console.log("invalid user name");
}
