console.log("set time out func practise: ");
function HELLO() {
  console.log("count 1 2 3 ... hello");
}
console.log("1");
console.log("2");

setTimeout(HELLO, 3000);

setTimeout(() => {
  console.log("set time out with arrow func");
}, 3000);

console.log("3");
console.log("4");
