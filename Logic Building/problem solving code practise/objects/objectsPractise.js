const car = {
  name: "City",
  model: 2018,
};
console.log(car.name);

car.name = "Alto"; //modification
delete car.model; //to delete a property
console.log(car);

const property = "firstName";
const name = "Amna";
const user = {
  //   property: name,
  [property]: name,
};

console.log(user);

/* let say we have an obj and we want to loop through 
its keys
so we have for in loop
*/

const user2 = {
  name: "Ali",
  age: 24,
  isTotallyAwesome: true,
};

for (key in user2) {
  console.log(key); //to get all keys
  console.log(user2[key]);
}

/* Q2: create a func mutiplyByTwo(obj) that multiply all numeric 
property values by 2
*/

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyBy2(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      // obj[key] = obj[key]*2
      obj[key] *= 2;
    }
  }
  return obj;
}
multiplyBy2(nums);
console.log(multiplyBy2(nums));

// Q3: What's the o/p of following code
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

/*
What is JSON.stringify and JSON.parse ?
*/

let user3 = {
  name: "Hassan",
  age: 24,
};

console.log(user3);
console.log(JSON.stringify(user3)); // to convert obj into string

// you want to covert string back to an object
const strObj = JSON.stringify(user3);
console.log("strObj.name: ", strObj.name);

console.log(JSON.parse(strObj));

/* Q5: What's the <o/p> ?
 */

console.log(..."Samara");
console.log([..."Samara"]);

// Q6: What's the o/p
let user4 = { name: "Umaima", age: 21 };
const admin = { admin: true, ...user4 };
/*its gonna spread all of properties of user4 obj
 inside admin object
*/
console.log(admin);

// What is destructuring in objects?
const user5 = {
    name: 'abc',
    age: 20
}

const {} = user