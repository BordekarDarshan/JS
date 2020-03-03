///<reference path="../jquery-3.4.1.min.js" />;
///<reference path="../Model/UserModel.js" />;

function userDataController() {
  //private Method
  let getUserDataAsync = async function() {
    try {
      return await new Promise(resolve => {
        let usermodelInstance = new userLoginData();
        usermodelInstance.username = $("#txtusername").val();
        usermodelInstance.password = $("#txtpassword").val();

        return resolve(usermodelInstance);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let userDataModelToJSONAsync = async function(parameterToTakeUserDataModel) {
    try {
      return await new Promise(resolve => {
        let convertModelToObj = JSON.stringify(parameterToTakeUserDataModel);

        return resolve(convertModelToObj);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let setLocalStorageAsync = async function(JsonOfUserModel) {
    try {
      return await new Promise(resolve => {
        localStorage.setItem("UserModelKey", JsonOfUserModel);
        return resolve();
      });
    } catch (ex) {
      throw ex;
    }
  };

  let redirectToInfoPageAsync = async function() {
    try {
      return await new Promise(resolve => {
        window.location.pathname = "../../../../Day17/View/Info.html";
        return resolve();
      });
    } catch (ex) {
      throw ex;
    }
  };

  //Public Method
  this.onSubmitAsync = async function() {
    try {
      return await new Promise(async resolve => {
        let userData = await getUserDataAsync();
        let Conversion = await userDataModelToJSONAsync(userData);
        let StoreDataLocalStorage = await setLocalStorageAsync(Conversion);
        let redirect = await redirectToInfoPageAsync();
        return resolve();
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };
}

function onbtnclick() {
  let instance = new userDataController();
  instance.onSubmitAsync().then(resolve => {
    console.log(resolve);
  });
}
