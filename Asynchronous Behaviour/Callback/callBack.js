// console.log("a");
// let d = ThirdUser();
// console.log(d); // Will give Undefined
// console.log("c");
// function ThirdUser() {
//   setTimeout(() => {
//     console.log("loading....");
//     return "b";
//   }, 3000);
// }

//Calback Hell
console.log("First");
ThirdUser("Third User", arg => {
  console.log(arg);
  takePassWordOfThirdUser(arg, arg => {
    console.log(arg);
    findMailAndPasswordandGiveEmail(arg.id, arg.password, arg => {
      console.log(arg);
    });
  });
});
console.log("Second User");
function ThirdUser(word, callback) {
  setTimeout(() => {
    console.log("loading......");
    callback(word);
  }, 3000);
}
function takePassWordOfThirdUser(whichuser, callback) {
  setTimeout(() => {
    console.log("loading Password");
    callback({ id: whichuser, password: "abcd" });
  }, 3000);
}
function findMailAndPasswordandGiveEmail(id, pass, callback) {
  setTimeout(() => {
    console.log("Loading...");
    console.log("Finding Mail...");
    callback({ id: id, password: pass, Mail: "abc@gmail.com" });
  }, 3000);
}
