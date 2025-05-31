console.log("plaindrome question: ");
function palindrome(value) {
  const reverseValue = value.split("").reverse().join("");
  return value == reverseValue ? "plaindrome" : "not a palindrome";
}

console.log(palindrome("121"));
console.log(palindrome("abba"));
console.log(palindrome("samara"));
