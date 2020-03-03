//function Declaration

let result = undefined;

//[1]
function one() {
  result = "Function One";
}
one();
console.log(result);

//[2]
function two() {
  return "Function Two";
}
let funcTwo = two();
console.log(funcTwo);

//[3]
function three(paraOne) {
  console.log("Function Three");
}
three("Three");

//[4]
function four(paraOne) {
  return "Function Four";
}
let funcFour = four("four");
console.log(funcFour);

/*---------------------------------------------------------------------*/

//function Expression
var theBiggest = function(a, b) {
  var result;
  a > b ? (result = ["a", a]) : (result = ["b", b]);
  return result;
};
console.log(theBiggest(3 / 4, 5 / 7));

/*---------------------------------------------------------------------*/

//Immediately invoked function expression... (IIFE)
(function() {
  let result = 12;
  console.log(`"IIFE" ${result}`);
})();
