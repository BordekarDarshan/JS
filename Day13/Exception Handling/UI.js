function Ui(BlInstance) {
  let bl = BlInstance;
  this.Demo = function() {
    try {
      bl.Demo();
      console.log("UI Logic");
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stacktrace);
    }
  };
}
let repObj = new Repo();
let blObj = new Bl(repObj);
let UiObj = new Ui(blObj);
UiObj.Demo();
