///<reference path="../Model/salesModel.js"/>

function salesCalBl(salesModel) {
  let salesModelObj = salesModel; //Encapsulation.

  //////Private Method.////////

  //Calculate Total Price Based On quantity.

  let calculateTotalProductPriceBasedOnQuantity = async function() {
    try {
      return await new Promise(resolve => {
        salesModelObj.totalPrice =
          salesModelObj.productModel.productPrice * salesModelObj.quantity;
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //calculate Discount As Per CustomerType.

  let calculateDiscountAsPerCustomerType = async function() {
    let customerType = undefined;
    try {
      return await new Promise(async resolve => {
        customerType = salesModelObj.customerModel.customerType;

        //Identify Customer Type.
        if (customerType == "1") {
          salesModelObj.discountModel.discountRate = 10;
        } else if (customerType == "2") {
          salesModelObj.discountModel.discountRate = 15;
        } else if (customerType == "3") {
          salesModelObj.discountModel.discountRate = 20;
        }

        //Calculate Discount price.
        salesModelObj.discountModel.discountPrice =
          salesModelObj.totalPrice *
          salesModelObj.discountModel.discountRate /
          100;
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  // Calculate GST.
  let calculateGst = async function() {
    let stateName = undefined;
    let gst = undefined;

    try {
      return await new Promise(resolve => {
        stateName = salesModelObj.customerModel.state;
        salesModelObj.gstModel.cgst = 0;
        salesModelObj.gstModel.sgst = 0;
        salesModelObj.gstModel.igst = 0;
        if (stateName === "Maharashtra") {
          //CGST + SGST
          gst = salesModelObj.totalPrice * 18 / 100;
          salesModelObj.gstModel.cgst = gst / 2;
          salesModelObj.gstModel.sgst = gst / 2;
        } else {
          //IGST
          gst = salesModelObj.totalPrice * 18 / 100;
          salesModelObj.gstModel.igst = gst;
        }

        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //calculate Gross Price Of Product.
  let calculateGrossPriceOfProduct = async function(totalGstPrice) {
    try {
      return await new Promise(resolve => {
        salesModelObj.grossPrice =
          salesModelObj.totalPrice * salesModelObj.quantity +
          (salesModelObj.gstModel.cgst +
            salesModelObj.gstModel.sgst +
            salesModelObj.gstModel.igst);
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //Calculate net Price of Product.
  let calculateNetPriceOfPrice = async function() {
    try {
      return await new Promise(resolve => {
        salesModelObj.netPrice =
          salesModelObj.grossPrice - salesModelObj.discountModel.discountPrice;
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  ////////Public Method.////////
  this.sendCalculationBacktoSalesController = async function() {
    try {
      return await new Promise(async resolve => {
        await calculateTotalProductPriceBasedOnQuantity();

        await calculateDiscountAsPerCustomerType();

        let storeGstValue = await calculateGst();

        await calculateGrossPriceOfProduct(storeGstValue);

        await calculateNetPriceOfPrice();

        return resolve(salesModelObj);
      });
    } catch (ex) {
      throw ex;
    }
  };
}
