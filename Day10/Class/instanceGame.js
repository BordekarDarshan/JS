function darshan() {
  this.first = function() {
    console.log("first");
  };

  this.second = function() {
    console.log("second");
  };

  this.third = function() {
    console.log("third");
  };
}

//[Bad Practice ONE]

// function ani() {
//   this.callI1 = function() {
//     let darshanobj1 = new darshan();
//     darshanobj1.first();
//   };

//   this.callI2 = function() {
//     let darshanobj2 = new darshan();
//     darshanobj2.second();
//   };

//   this.callI3 = function() {
//     let darshanobj3 = new darshan();
//     darshanobj3.third();
//   };
// }
// let aniobj = new ani();
// aniobj.callI1();
// aniobj.callI2();
// aniobj.callI3();

//[Bad Practice TWO]

// function ani() {
//   let darshanobj1 = new darshan();
//   this.callI1 = function() {
//     darshanobj1.first();
//   };

//   this.callI2 = function() {
//     darshanobj1.second();
//   };

//   this.callI3 = function() {
//     darshanobj1.third();
//   };
// }
// let aniobj = new ani();
// aniobj.callI1();
// aniobj.callI2();
// aniobj.callI3();

//[Good Practice]

// function ani(usetocall) {
//   let darshansupprtobj = usetocall;
//   this.callI1 = function() {
//     darshansupprtobj.first();
//   };

//   this.callI2 = function() {
//     darshansupprtobj.second();
//   };

//   this.callI3 = function() {
//     darshansupprtobj.third();
//   };
// }

// let darshansupprtobj = new darshan();
// let aniobj = new ani(darshansupprtobj);
// aniobj.callI1();
// aniobj.callI2();
// aniobj.callI3();

//not any variable is assigned to parameter To store
function ani(usetocall) {
  usetocall;
  this.callI1 = function() {
    usetocall.first();
  };

  this.callI2 = function() {
    usetocall.second();
  };

  this.callI3 = function() {
    usetocall.third();
  };
}

let anyotherWord = new darshan();
let aniobj = new ani(anyotherWord);
aniobj.callI1();
aniobj.callI2();
aniobj.callI3();
