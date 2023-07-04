const lyrics =
  "Tumi bondu kala pakhi ami jeno ki. boshoto kale tomai bolte parin ni. kala kala sada sada rong jomeshe sada kala";

const searchString = "Pakhi";
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();

const doesExistOnLine = lyrics
  .toLowerCase()
  .includes(searchString.toLowerCase());

const doesExist = lyricsLowerCase.includes(searchStringLowerCase);

console.log(doesExistOnLine);
console.log(doesExist);

//................................................................

console.log(lyrics.indexOf("kaillla"));

if (lyrics.indexOf("sada") !== -1) {
  console.log("exists inside the string ");
} else {
  console.log("cannot find");
}

// starts with
console.log(lyrics.startsWith("Tumi"));

// ends with
const fileName = "mybiodata.txt";
const otherFile = "mypic.png";

fileName.endsWith(".pdf");
