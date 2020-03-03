//Basic

// let prom = new Promise((resolveCatchesThen, RejectCatchesReject) => {
//   resolveCatchesThen("hello");
//   RejectCatchesReject(new Error("Wrong"));
// })
//   .then(resultOfThen => {
//     console.log(resultOfThen);
//   })
//   .catch(err => {
//     console.log(err);
//   });

console.log("First User");

userDetails(1).then(data => {
  console.log(data);
  takePassWordOfThirdUser(data.Userid).then(arg => {
    console.log(arg);
  });
});

console.log("Second User");

function userDetails(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading....");
      resolve({ Userid: id });
    }, 3000);
  });
}
function takePassWordOfThirdUser(whichuser, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("loading Password");
      resolve({ id: whichuser, password: "abcd" });
    }, 3000);
  });
}
