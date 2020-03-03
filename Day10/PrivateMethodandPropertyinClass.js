function user() {
  //Private Method.
  let privateMethodDemo = function() {
    console.log("hii");
  };
  privateMethodDemo();

  //Private Property.
  let privateprop = undefined;
  let privatePropAssignedTo = undefined;

  let privateMethodDemo1 = function(strprivate) {
    privateprop = strprivate;
    console.log(`Hii ${privateprop}`);
  };
  privateMethodDemo1("Sid");

  //Private property by Public method.

  this.publicMethod = function(parameterOfFunction) {
    privatePropAssignedTo = parameterOfFunction;
    return `Hii ${privatePropAssignedTo}`;
  };
}

let userObj = new user();
console.log(userObj.publicMethod("darshan"));
