function Demo() {
  //Private Methods
  let MethodDarshan = async function() {
    try {
      return await new Promise(resolve => {
        let numValue = 10;
        return resolve(numValue);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let MethodAni = async function(paraForTakingValueFromDarshan) {
    try {
      return await new Promise(resolve => {
        let numValueTwo = paraForTakingValueFromDarshan * 12;
        return resolve(numValueTwo);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let MethodAbhi = async function(paraForTakingValueFromAni) {
    try {
      return await new Promise(resolve => {
        let numValueThree = paraForTakingValueFromAni * 12;
        return resolve(numValueThree);
      });
    } catch (ex) {
      throw ex;
    }
  };

  this.Display = async function() {
    try {
      return await new Promise(async resolve => {
        let value = await MethodDarshan();
        let carryForward = await MethodAni(value);
        let CarryForwardAgain = await MethodAbhi(carryForward);

        return resolve(CarryForwardAgain);
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };
}
function BtnOnClick() {
  let show = new Demo();
  let result = show.Display().then(resolve => console.log(resolve));
}
