// iterating -strings and arrays
const arr = ["one", "two", "three"];
for (i of arr) {
  console.log(i);
}
//inumerating -objects
const obj = {
  game: "play",
  eat: "berger",
};

for (i in obj) {
  console.log(i);
}
//------------------------------------
// const arr = [1, 2, 3];
// const cloneArr = [].concat(arr);
// arr[3] = 2;
// console.log(arr);
// console.log(cloneArr);

// // clone objects
// const obj = {
//   a: "a",
//   b: "b",
//   c: "c",
//   d: {
//     deep: "clone me😊",
//   },
// };

// const clone = Object.assign({}, obj.d);
// const clone2 = { ...obj };
// obj.d = "did it";

// console.log(obj);
// console.log(clone);
// console.log(clone2);
