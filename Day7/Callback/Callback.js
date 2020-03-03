// let result = undefined;

// function callB(n1, n2, cbFun) {
//   let a = cbFun(n1, n2);
//   return a * 12;
// }
// result = callB(2, 2, function(cbn1, cbn2) {
//   return cbn1 + cbn2;
// });
// console.log(result);

// function createQuote(quote, callback) {
//   var myQuote = "Like I always say, " + quote;
//   callback(myQuote); // 2
// }

// createQuote("eat your vegetables!", function(quote) {
//   console.log(quote);
// });

// function admul(num1, num2) {
//   let a = num1 + num2;
//   let b = a * 12;
//   return b;
// }
// let c = admul(2, 2);
// console.log(c);

// function notification(os, callbackMSG) {
//   let a = "Hi Your PHONE IS" + os;
//   callbackMSG(a);
// }

// notification("android", os => {
//   console.log(os);
// });

// function calculator(age, name, callbackadditionOpe) {
//   callbackadditionOpe(age, name);
// }

// calculator("darshan", 20, function(age, name) {
//   let a = age + name;
//   console.log(a);
// });

// let a = {
//   name: "darshan",
//   age: 20,
//   print: function() {
//     console.log(this.name + this.age);
//   }
// };
// a.print();

function Prom(callbakinputfunction) {
  let khi = prompt("enter name");
  callbakinputfunction(khi);
}

function input(name) {
  let a = "hello" + name;
  alert(a);
}
Prom(input);

// function Prom() {
//   let khi = prompt("enter name");
//   let a = "hello" + khi;
//   alert(a);
// }
// Prom();
