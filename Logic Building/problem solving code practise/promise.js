console.log("promise");

// promise : 3 states : pending, fulfilled, reject

// let promise = new Promise((resolve, reject) => {
//   console.log("I am promise");
//     resolve(123);
//     resolve("success");
//   reject("some error occured");
// });

// function getData(dataID, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataID);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// lets say we have an API jo data return krti h , tou apis hame promise return krti hain in actual

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 8000);
//   });
// }

// .then catch understanding:

function getPromise() {
  return new Promise((resolve, reject) => {
    console.log("I am promise");
    resolve("success");
    // reject("network error");
  });
}

let promise = getPromise();

promise.then((res) => {
  console.log("promise fulfilled", res);
});

promise.catch((err) => {
  console.log("promise rejected", err);
});

// callback hell
// to print each data after 2 sec
// getData(1, () => {
//   console.log("getting data2 .....");
//   getData(2, () => {
//     console.log("getting data3 .....");
//     getData(3, () => {
//       console.log("getting data4 .....");
//       getData(4);
//     });
//   });
// });
