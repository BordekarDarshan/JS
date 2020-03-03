function onDisplay(a = "Darshan", b, c = 1) {
  return `Name is ${a}${b}${c}`;
}
let d = onDisplay("bordekar");
console.log(d);

function onDisplay1(g, h, i) {
  return `Name is ${g}${h}${i}`;
}
let e = onDisplay1("Darshan", "bordekar", 23);
console.log(e);

function onDisplay2(j, k = "Darshan", l = 1) {
  return `Name is ${j}${k}${l}`;
}
let f = onDisplay2("bordekar ");
console.log(f);

function onDisplay3(j, k, l = 1) {
  return `Name is ${j}${k}${l}`;
}
let g = onDisplay3("Darshan ", "bordekar ", 36, 45);
console.log(g);
