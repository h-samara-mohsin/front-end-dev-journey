console.log("reverse string without using builtin method: ");

const reverseString = (str) => {
  let strArr = str.split("");
  let reversedStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
};

const myName = "Samara";
console.log("reverse string:", reverseString(myName));
