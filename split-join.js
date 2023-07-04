const lyrics =
  "Tumi bondu kala pakhi ami jeno ki. boshoto kale tomai bolte parin ni. kala kala sada sada rong jomeshe sada kala";

const parts = lyrics.split(" ");
const sentences = lyrics.split(".");
const char = lyrics.split("");
console.log(char);

const partial = lyrics.slice(4, 20);
const partial2 = lyrics.substring(4, 20);
console.log(partial);
console.log(partial2);

const lines = [
  "Tumi bondu kala pakhi ami jeno ki",
  "boshoto kale tomai bolte parin ni",
  "kala kala sada sada rong jomeshe sada kala",
  "Rong jomeshe sada rong jomeshe",
];

const newSong = lines.join(". ");
console.log(newSong);
