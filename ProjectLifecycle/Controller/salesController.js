///<reference path="../Model/salesModel.js"/>
///<reference path="../Model/customerModel.js"/>
///<reference path="../Model/productModel.js"/>
///<reference path="../Model/discountModel.js"/>
///<reference path="../Model/gstModel.js"/>
///<reference path="../BL/salesCalculatuion.js"/>
/// <reference path="../Lib/jquery-3.4.1.min.js" />;

function salesController(salesModel = undefined, salesBl = undefined) {
  let salesModelObj = salesModel; //Encapsulation.
  let salseBLObj = salesBl;

  //Private Methods.
  let getCustomerInfoAsync = async function() {
    try {
      return await new Promise(resolve => {
        salesModelObj.customerModel.fullName = $("#txtCustomerName").val();

        salesModelObj.customerModel.customerType = $(
          "#dd1Customertype option:selected"
        ).val();

        salesModelObj.customerModel.state = $("#txtStateName").val();

        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let getProductInfo = async function() {
    try {
      return await new Promise(resolve => {
        salesModelObj.productModel.productName = $("#txtProductName").val();
        salesModelObj.productModel.productPrice = $("#txtProductPrice").val();
        salesModelObj.quantity = $("#txtquantity").val();

        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let salesModelConvertIntoIntoJson = async function() {
    let SalesJson = undefined;
    try {
      return await new Promise(resolve => {
        SalesJson = JSON.stringify(salesModelObj);
        return resolve(SalesJson);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let storeJsonDataInLocalStorage = async function(JsonData) {
    let storageData = undefined;
    try {
      return await new Promise(resolve => {
        storageData = localStorage.setItem("salesModelKey", JsonData);
        return resolve(storageData);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let redirectToSalesInvoicePage = async function() {
    try {
      return await new Promise(resolve => {
        window.location.pathname =
          "../../../../ProjectLifecycle/View/SalesInvoice.html";
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };
  //Public Methods.

  //Submit Method
  this.onSubmitClick = async function() {
    let salesModelJson = undefined;
    try {
      return await new Promise(async resolve => {
        // get customer Information
        await getCustomerInfoAsync();

        // get Product Information
        await getProductInfo();

        //Calculate
        salesModelObj = await salseBLObj.sendCalculationBacktoSalesController();

        //Convert salesModel Object into JSON.
        salesModelJson = await salesModelConvertIntoIntoJson();

        //Store JSON data in Local Storage.
        await storeJsonDataInLocalStorage(salesModelJson);

        await redirectToSalesInvoicePage();

        return resolve(true);
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };

  //Cancel Method.
  this.onCancelClick = async function() {
    try {
      return await new Promise(resolve => {
        $("#txtCustomerName").val("");
        $("#dd1Customertype").val("Choose...");
        $("#txtStateName").val("");
        $("#txtProductName").val("");
        $("#txtProductPrice").val("");
        $("#txtquantity").val("");
        $("#txtCustomerName").focus();
        return resolve(true);
      });
    } catch (ex) {
      console.log(ex.message);
      console.log(ex.stack);
    }
  };
}

//On Submit Method.

function onSubmitButtonEvent() {
  let salesControllerObj = null;
  let salesModelObj = null;
  let customerModelObj = null;
  let productModelObj = null;
  let discountModelObj = null;
  let gstModelObj = null;
  let salseBLObj = null;
  try {
    //Instance of customerModel.
    customerModelObj = new customerModel();

    //Instance of productmodel.
    productModelObj = new productModel();

    //Instance of discountModel.
    discountModelObj = new discountModel();

    //Instance of salesModel.
    salesModelObj = new salesModel();

    //Instance of gstModel.
    gstModelObj = new gstModel();

    //Binding of customer Model To Sales Model.
    salesModelObj.customerModel = customerModelObj;

    //Binding of product model to Sales Model.
    salesModelObj.productModel = productModelObj;

    //Binding of discount Model To Sales Model.
    salesModelObj.discountModel = discountModelObj;

    //Binding of GST Model To Sales Model.
    salesModelObj.gstModel = gstModelObj;

    salseBLObj = new salesCalBl(salesModelObj);

    //Instance of salesController.
    salesControllerObj = new salesController(salesModelObj, salseBLObj);

    //To Access Submit Method with the help of sales Controller instance.
    salesControllerObj.onSubmitClick().then(resolve => {
      console.log(resolve);
    });
  } catch (ex) {
    console.log(ex.message);
    console.log(ex.stack);
  }
}

//On Cancel Method
function onCancelbuttonEvent() {
  let salesControllerObj = null;
  try {
    salesControllerObj = new salesController();
    salesControllerObj.onCancelClick().then(resolve => {
      console.log(resolve);
    });
  } catch (ex) {
    console.log(ex.message);
    console.log(ex.stack);
  }
}
