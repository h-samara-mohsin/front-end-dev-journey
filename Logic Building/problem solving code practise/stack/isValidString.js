/*
Write a function which validates if a string is valid (javascript)

() - valid
{[]} - valid
{{}}[] - valid
{[}] - invalid
*/

function isValid(str) {
  const stack = [];

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      const last = stack.pop();
      if (last !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// chatgpt
/*
function isValid(str) {
  const stack = []; // yeh humari temporary jagah hai jahan hum opening brackets rakhte hain

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of str) {
    // Agar opening bracket hai to stack mein daal do
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    }
    // Agar closing bracket hai to check karo
    else if (char === ")" || char === "}" || char === "]") {
      const last = stack.pop(); // stack se last nikalo
      if (last !== bracketMap[char]) {
        return false; // match nahi kiya, invalid
      }
    }
  }

  // Agar stack khaali hai to sab sahi tha
  return stack.length === 0;
}

*/

console.log("1st:", isValid("()"));
console.log("2nd: ", isValid("(){}[]"));
console.log("3rd: ", isValid("{[]}"));
console.log("4th: ", isValid("{{}}[]"));
console.log("5th: ", isValid("{[}]"));
