let str = "this is javascript";

console.log(str.split(" "));

let capitalizeEachWord = str
  .split(" ")
  .map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  })
  .join(" ");

console.log("capitalizeEachWord: ", capitalizeEachWord);
