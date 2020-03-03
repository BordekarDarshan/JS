let userDataArrayObj = new userDataArray();

let user1 = new user();
user1.firstname = "darshan";
user1.lastname = "Bordekar";

userDataArrayObj.addUser(user1);

let user2 = new user();
user2.firstname = "ani";
user2.lastname = "Bordekar";

userDataArrayObj.addUser(user2);
userDataArrayObj.getUserData();
userDataArrayObj.getD(callbackparameter => {
  console.log(callbackparameter.firstname);
});
let a = userDataArrayObj.searchsingleuser("darshan");
// console.log(a); O/P will be true false then undefined caused i am
//printing "a" again
//in "searchsingleuser" function i gave console.log()
//In If-else condition
//If i gave "return" to both "if And Else" and return for returning main
//data i.e to "nameForReturn" then it will give undefined

console.log(a);

//For Finding Multiple Data.use filter It Travels through the array and find
//multiple records whatever you gave it to search for.

function arrayWithRestParameter(abc, ...restArrayParameter) {
  restArrayParameter.forEach(parameterRepresentArray => {
    console.log(parameterRepresentArray);
  });
}
arrayWithRestParameter(1, 2, 3, 4, 5, 6, 7, 8, 8); //Array Inputs
