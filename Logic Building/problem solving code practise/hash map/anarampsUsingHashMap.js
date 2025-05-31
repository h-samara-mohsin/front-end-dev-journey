/*
Two strings are anagrams if they contain the same letters with the same frequency, but possibly in a different order.

Example:

"listen" and "silent" → anagrams

"hello" and "world" → not anagrams

🧠 Logic:
Remove any non-letter characters (optional, depends on problem).

Convert both strings to lowercase (for case-insensitive check).

Count the frequency of each letter in both strings using hash maps.

Compare both hash maps — if they are the same, strings are anagrams.

*/

function anagramCheck(str1, str2) {
  function CountFrequencyOfEachLetter(str) {
    const countDic = {};
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, "");
    for (let letter of cleanedStr) {
      countDic[letter] = (countDic[letter] || 0) + 1;
    }
    return countDic;
  }

  let FirstWord = CountFrequencyOfEachLetter(str1);
  let secondWord = CountFrequencyOfEachLetter(str2);

  if (Object.keys(FirstWord).length !== Object.keys(secondWord).length) {
    return false;
  }

  for (let key in FirstWord) {
    if (FirstWord[key] !== secondWord[key]) {
      return false;
    }
  }
  return true;
}

console.log("listen", "silent", anagramCheck("listen", "silent"));
console.log("hello", "world", anagramCheck("hello", "world"));
