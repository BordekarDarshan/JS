function userDataArray() {
  let _UserData = []; //gLOBAL vARIABLE
  this.addUser = function(userProperty) {
    _UserData.push(userProperty);
  };

  this.getUserData = function() {
    // for (let userData of _UserData) {
    //   console.log(userData);
    // }

    _UserData.forEach(userr => {
      console.log(userr);
    });
    console.log(_UserData);
  };

  this.getD = function(callback) {
    for (let userrr of _UserData) {
      callback(userrr);
    }
  };
  this.searchsingleuser = function(strfirstname) {
    // let nameForReturn = _UserData.find(particulardata => {
    //   if (particulardata.firstname === strfirstname) {
    //     console.log("true");
    //   } else {
    //     console.log("false");
    //   }
    // });
    // return nameForReturn;

    let nameForReturn = _UserData.find(particulardata => {
      return particulardata.firstname === strfirstname ? true : false;
    });
    return nameForReturn;
  };
}
