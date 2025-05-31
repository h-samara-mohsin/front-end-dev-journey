let str = "javascript";

let vowelCount = (str) => {
  let vowels = "aeiou";
  let count = 0;
  str = str.toLowerCase();
  let freq = {};
  for (let char of str) {
    if (vowels.includes(char)) {
      count += 1;
      freq[char] = (freq[char] || 0) + 1;
    }
  }
  return { freq, count };
};

console.log(vowelCount(str));

// combined consonants bhi batao:
let combinedRes = (str) => {
  let vowels = "aeiou";
  let vowelsCount = {};
  let count1 = 0;
  let consonantCount = {};
  let count2 = 0;
  for (let char of str) {
    if (/[a-z]/.test(char)) {
      if (vowels.includes(char)) {
        vowelsCount[char] = (vowelCount[char] || 0) + 1;
        count1 += 1;
      } else {
        consonantCount[char] = (consonantCount[char] || 0) + 1;
        count2 += 1;
      }
    }
  }
  return { vowelsCount, count1, consonantCount, count2 };
};
let str2 = "javascript";
console.log(combinedRes(str2));
