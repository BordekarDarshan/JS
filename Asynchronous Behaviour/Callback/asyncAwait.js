console.log("First User");

// userDetails(1).then(data => {
//   console.log(data);
//   takePassWordOfThirdUser(data.Useruid).then(arg => {
//     console.log(arg);
//   });
// });

console.log("Second User");

async function userDetailsAsync(uid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading....");
      resolve({ Useruid: uid });
    }, 3000);
  });
}
async function takePassWordOfThirdUserAsync(whichuser, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("loading Password");
      resolve({ uid: whichuser, password: "abcd" });
    }, 3000);
  });
}
// let valueOfuserDetails=await userDetails();
// let valueTakePassWordOfThirdUser=await valueTakePassWordOfThirdUser(valueOfuserDetails.Useruid)

async function a() {
  let valueOfuserDetails = await userDetailsAsync("1");
  // let valueTakePassWordOfThirdUser = await takePassWordOfThirdUserAsync(
  //   valueOfuserDetails.Useruid
  // );
  let valueTakePassWordOfThirdUser = await takePassWordOfThirdUserAsync(
    valueOfuserDetails
  );
  console.log(valueTakePassWordOfThirdUser);
}

a();
