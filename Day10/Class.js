function users() {
  this.firstname = undefined;
  this.lastname = undefined;

  //Public Method

  this.display = function() {
    return `${this.firstname} ${this.lastname}`;
  };
}

let userobj = new users();
userobj.firstname = "darshan";
userobj.lastname = "bordekar";

let a = userobj.display();
console.log(a);

userobj = null; //undefined  //Instance is Destroyed

userobj = new users();
userobj.firstname = "ani";
userobj.lastname = "vaidya";

let b = userobj.display();
console.log(b);
