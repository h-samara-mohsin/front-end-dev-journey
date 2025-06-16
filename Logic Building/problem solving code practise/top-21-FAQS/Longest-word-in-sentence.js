const longestWord = (sentence) => {
  let wordsArr = sentence.split(" ");
  let longestCount = wordsArr[0].length;
  let result;
  for (let i = 0; i < wordsArr.length; i++) {
    let cleanedWord = wordsArr[i].replace(/[^\w]/g, "");
    let count = cleanedWord.length;
    if (longestCount < count) {
      longestCount = count;
      result = cleanedWord;
      console.log(result);
    }
  }
  return result;
};

const sentence = "The quick brown fox jumped over the lazy dog!";
console.log("Longest word:", longestWord(sentence));

const sentence2 =
  "The quick brown fox jumped over the lazy dog , this is universalTruth!";
console.log("Longest word:", longestWord(sentence2));
