/*
write a function that outputs the count of each letter
 in a string, is case my you usually use a 
 hashmap/dictionary
*/

function countLetters(str) {
  const countDic = {};

  //   const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");

  const cleanedStr = str
    .toLowerCase()
    .split("")
    .filter((char) => char > "a" && char < "z")
    .join();

  for (let char of cleanedStr) {
    countDic[char] = (countDic[char] || 0) + 1;
  }

  return countDic;
}

console.log(countLetters("Hello World"));
console.log(countLetters("Samara"));
console.log(countLetters("This is a book"));
