///<reference path="../jquery-3.4.1.min.js" />;
///<reference path="../Model/UserModel.js" />;
function Displaydata() {
  //Private Methods
  let fetchUserDataFromLocalstorage = async function() {
    try {
      return await new Promise(resolve => {
        let userDataFromLocalstorage = localStorage.getItem("UserModelKey");
        return resolve(userDataFromLocalstorage);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let JsonToUserDataModel = async function(ParameterToTakeJsonObj) {
    try {
      return await new Promise(resolve => {
        let convertJsonToUserDataModel = JSON.parse(ParameterToTakeJsonObj);
        return resolve(convertJsonToUserDataModel);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let displayDataGotFromJson = async function(
    parameterToTakeValueGotafterCoversion
  ) {
    try {
      return await new Promise(resolve => {
        $("#lblusername").html(parameterToTakeValueGotafterCoversion.username);
        $("#lblpassword").html(parameterToTakeValueGotafterCoversion.password);
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //public Methods
  this.displayUserData = async function() {
    try {
      return await new Promise(async resolve => {
        let getDataFromLS = await fetchUserDataFromLocalstorage();
        let convertJsonToUserDatObj = await JsonToUserDataModel(getDataFromLS);
        let display = await displayDataGotFromJson(convertJsonToUserDatObj);
        return resolve(display);
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };
}

function showdataonload() {
  let showdata = new Displaydata();
  showdata.displayUserData().then(resolve => {
    console.log(resolve);
  });
}
showdataonload();
