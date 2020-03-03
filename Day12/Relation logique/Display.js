function Display() {
  this.display = function(UserModel) {
    console.log(UserModel.firsname);
    console.log(UserModel.lastname);
    console.log(UserModel.communication.Email);
    console.log(UserModel.communication.phone);
    for (let a of UserModel.userHome) {
      console.log(a.address);
    }
  };
}
