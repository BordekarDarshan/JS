/// <reference path="../login/jquery-3.4.1.min.js" />;

//Clear The TextBox
function onCancel() {
  $("#txtUserName").val("");
  $("#txtPass").val("");

  $("txtUserName").focus();
}

function getLoginData() {
  let username = $("#txtUserName").val();
  let userpass = $("#txtPass").val();
  let loginInputArray = [username, userpass];
  return loginInputArray;
  //return [username, userpass]
}

function loginResIsValid(msg) {
  let type = typeof msg;

  if (type === "boolean") {
    console.log("redirect");
    $("#divMessage").html("");
    $("#divMessage").hide();
  } else if (type === "string") {
    onCancel();
    $("#divMessage").html(msg);
    $("#divMessage").show();
  }
}

function onSubmit(user, pass) {
  let callgetlogindata = getLoginData();

  //   let username = callgetlogindata[0];
  //   let passw = callgetlogindata[1];

  //   let msg = loginverification(username, passw);

  let msg = loginverification(callgetlogindata[0], callgetlogindata[1]);
  loginResIsValid(msg);
}
