// var c = 100;
// function x() {
//   var c = 30;
//   console.log(window.c);
//   window.c = 20;
// }

// x();
// console.log(c);

// another example
var a = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;
  // console.log(a);
  console.log(window.a);
}
