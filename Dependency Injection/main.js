// function Wheels() {
//   this.action = () => console.log("The wheels go 'round and 'round.");
//   console.log("Made some wheels.");
// }

// function Pistons() {
//   this.action = () => console.log("The pistons fire up and down.");
//   console.log("Made some pistons.");
// }

// function Engine() {
//   this.pistons = new Pistons();
//   this.action = () => {
//     this.pistons.action();
//     console.log("The engine goes vroom vroom.");
//   };
//   console.log("Made an engine.");
// }

// function Car() {
//   this.wheels = new Wheels();
//   this.engine = new Engine();
//   this.action = () => {
//     this.wheels.action();
//     this.engine.action();
//     console.log("The car drives by.");
//   };
//   console.log("Made a car.");
// }

// var car = new Car();
// car.action();

function Wheels() {
  this.action = () => console.log("The wheels go 'round and 'round.");
  console.log("Made some wheels.");
}

function Pistons() {
  this.action = () => console.log("The pistons fire up and down.");
  console.log("Made some pistons.");
}

function TestPistons() {
  this.action = () => console.log("The test pistons do nothing.");
  console.log("Made some test pistons.");
}

function Engine(pistons) {
  this.pistons = pistons;
  this.action = () => {
    this.pistons.action();
    console.log("The engine goes vroom vroom.");
  };
  console.log("Made an engine.");
}

function Car(wheels, engine) {
  this.wheels = wheels;
  this.engine = engine;
  this.action = () => {
    this.wheels.action();
    this.engine.action();
    console.log("The car drives by.");
  };
  console.log("Made a car.");
}

var pistons = new Pistons();
var testPistons = new TestPistons();
var wheels = new Wheels();
var engine = new Engine(pistons);
var testEngine = new Engine(testPistons);
var car = new Car(wheels, engine);
car.action();
testEngine.action();
