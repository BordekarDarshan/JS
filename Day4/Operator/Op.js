//+ Operator
let a = 12;
let b = 12;
console.log(a + b);

let c = 12;
let d = "13";
console.log(c + d);

let e = 12;
let f = "13";
console.log(e - f);

let g = "12";
let h = 23;
let i = 45;
console.log(g + h - i);

let j = "50";
let k = 2;
let l = 7;
console.log(j + k - l);
//50+2 (concat) = 502 then arethmatic 502-7 = 495

let m = 10;
let n = 10;
let o = "10";
let p = 10;
let q = 10;

console.log(m + n * p + q * o);
//First it will do Multiplication (n * p)=100 then (q*o)=100,
//Then Addition (n * p) + (q * o) = 200,
//Then 200 + m = 200 + 10 = 210,
//OutPut is 210.
