let userModelObj = new UserModel();
userModelObj.firsname = "Darshan";
userModelObj.lastname = "Bordekar";

let communicationObj = new communication();
communicationObj.Email = "abc@gmail.com";
communicationObj.phone = "1234567890";

let userhomeObj = new userHome();
userhomeObj.address = "bhandup";

let userhomeObj1 = new userHome();
userhomeObj1.address = "Thane";

let arr = [userhomeObj, userhomeObj1];

userModelObj.communication = communicationObj;
userModelObj.userHome = arr;

let userdisplayObj = new Display();
// userdisplayObj.display(UserModel); //Not Accessible
userdisplayObj.display(userModelObj);
