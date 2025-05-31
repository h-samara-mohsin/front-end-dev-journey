/*
 Best Technique: Hash Map / Frequency Counter
🚀 Logic
Use an object or Map to count the frequency of each element.

Loop through the array and increase the count.

Collect elements that have a count > 1.
*/

function findDuplicates(arr) {
  const freq = {};
  const duplicates = [];

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) {
      duplicates.push(Number(key));
    }
  }

  return duplicates;
}

// Example
const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(arr)); // [2, 3]

function findDuplicateWords(arr) {
  const freq = {};
  const duplicates = [];

  for (const word of arr) {
    freq[word] = (freq[word] || 0) + 1;
  }

  for (const word in freq) {
    if (freq[word] > 1) duplicates.push(word);
  }

  return duplicates;
}

// Demo
const words = ["apple", "banana", "mango", "apple", "kiwi", "banana"];
console.log(findDuplicateWords(words)); // ["apple", "banana"]

// 2. Ek hi String — duplicate characters dhundhnā
js;
Copy;
Edit;
function findDuplicateChars(str) {
  const freq = {};
  const duplicates = [];

  for (const ch of str) {
    // optional: ignore spaces or make case-insensitive
    if (ch === " ") continue; // skip spaces
    const key = ch.toLowerCase(); // case-insensitive

    freq[key] = (freq[key] || 0) + 1;
  }

  for (const ch in freq) {
    if (freq[ch] > 1) duplicates.push(ch);
  }

  return duplicates;
}

// Demo
const s = "Programming Rocks";
console.log(findDuplicateChars(s)); // ["r", "o", "g", "m", "s"]
