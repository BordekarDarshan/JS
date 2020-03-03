/// <reference path="../lib/jquery-3.4.1.min.js" />;
/// <reference path="../Model/loginModel.js" />;
function LoginController(loginmodel) {
  let loginmodelObj = loginmodel;
  this.cancelFunc = function() {
    $("#txtUsername").val("");
    $("#txtPassword").val("");
    $("#txtUsername").focus();
  };

  let getdata = function() {
    loginmodelObj.username = $("#txtUsername").val();
    loginmodelObj.password = $("#txtPassword").val();
  };

  let Auth = function() {
    let usr = "d";
    let pas = "123";
    if (loginmodelObj.username === usr && loginmodelObj.password === pas) {
      OnCancelEvent();
      //logincontrollerobj.cancelFunc();
      console.log("Redirect");
      $("#lab").html("");
      $("#lab").hide();
    } else {
      console.log("error");
      $("#lab").html("Error");
      $("#lab").show();
    }
  };

  this.onSubmit = function() {
    getdata();
    Auth();
  };
}

let loginmodelObj = new loginModel();
let logincontrollerobj = new LoginController(loginmodelObj);

function OnCancelEvent() {
  logincontrollerobj.cancelFunc();
}
function OnSubmitEvent() {
  logincontrollerobj.onSubmit();
}
