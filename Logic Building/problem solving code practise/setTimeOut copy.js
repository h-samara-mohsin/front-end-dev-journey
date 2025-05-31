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
// interview question at Beam
// Q1:
console.log("script started");
setTimeout(() => {
  console.log("microtask queue");
}, 0);
// promise tha jo resolve hone pe macrotask queue print krta tha
console.log("script ended");

// Q2:
// ++count , count ++ --> koi farq ha?
function Counter() {
  let count = 0;
  return function IncreamentCount() {
    return ++count;
  };
}

let counter1 = Counter();
let counter2 = Counter();

console.log(counter1());
console.log(counter2());
console.log(counter1());

// Q2:
// ++count , count ++ --> koi farq ha?
function Counter() {
  let count = 0;
  return function IncreamentCount() {
    return count++;
  };
}

let counter1 = Counter();
let counter2 = Counter();

console.log(counter1());
console.log(counter2());
console.log(counter1());

// Q2:
// ++count , count ++ --> koi farq ha?
function Counter() {
  let count = 0;
  return function IncreamentCount() {
    return count++;
  };
}

let counter1 = Counter();
let counter2 = counter1;

console.log(counter1());
console.log(counter2());
console.log(counter1());
