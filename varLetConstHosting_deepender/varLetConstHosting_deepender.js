// var name;
// name = "Deepender";

// let a = 10;
// const c = 3;

// if (true) {
//   console.log("abc");
//   console.log("cd");
// }

// function setup() {
//   var x = 10;
//   console.log(x);
// }
// setup();

// console.log(x);

// var x = 10;
// if (true) {
//   console.log(x);
// }

//Diff between let const and var
//var is functional scope and let and const works in block scope
//var and let can be redeclared and we can't redeclare const.

// var a = 10;
// a = 12;
// console.log(a);

// let b = 10;
// b = 12;
// console.log(b);

// const c = 10;
// c = 12;
// console.log(c);

//hoisting:

// function abc() {
//   console.log("abc");
// }
// abc();
// var a;
// console.log(a);
// var a = 10;

// //let a;
// let a = 10;
// console.log(a);

// function abc() {
//   var x;
//   console.log(x);
//   x = 10;
//   console.log(x);
// }
// console.log(x);

// abc();

// const name = "abc";
// function a() {
//   const name = "a";
//   console.log(name);
//   if (true) {
//     const name = "c";
//     console.log(name);
//   }
// }
// console.log(name);
// a();
