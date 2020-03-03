///<reference path="../Controller/salesController.js"/>
/// <reference path="../Lib/jquery-3.4.1.min.js" />;
function salesIvoiceController() {
  let salesModelObj = null;
  //Private Method

  //Fetch Data From Localstorage.
  let getJSONDataFromlocalstorage = async function() {
    let salesModelJson = undefined;
    try {
      return await new Promise(resolve => {
        salesModelJson = localStorage.getItem("salesModelKey");

        return resolve(salesModelJson);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //Convert JSON data into sales model object.

  let convertJsonIntoSalesModel = async function(salesModelJsonData) {
    try {
      return await new Promise(resolve => {
        salesModelObj = JSON.parse(salesModelJsonData);

        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };
  //Bind CustomerModel

  let bindCustomerRealatedData = async function() {
    try {
      return await new Promise(resolve => {
        $("#lblCustomerName").html(salesModelObj.customerModel.fullName);
        $("#lblCustomerType").html(salesModelObj.customerModel.customerType);
        $("#lblCustomerState").html(salesModelObj.customerModel.state);
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let bindProductRelatedData = async function() {
    try {
      return await new Promise(resolve => {
        $("#lblProductName").html(salesModelObj.productModel.productName);
        $("#lblProductPrice").html(salesModelObj.productModel.productPrice);
        $("#lblProductQuantity").html(salesModelObj.quantity);
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  let salesCalculationdata = async function() {
    try {
      return await new Promise(resolve => {
        $("#lblTotalPrice").html(salesModelObj.totalPrice);
        $("#lblDiscountRate").html(salesModelObj.discountModel.discountRate);
        $("#lblDiscountPrice").html(salesModelObj.discountModel.discountPrice);
        $("#lblGrossPrice").html(salesModelObj.grossPrice);
        $("#lblNetPrice").html(salesModelObj.netPrice);
        $("#lblCgst").html(salesModelObj.gstModel.cgst);
        $("#lblSgst").html(salesModelObj.gstModel.sgst);
        $("#lblIgst").html(salesModelObj.gstModel.igst);
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };

  //Public Method

  this.showInvoiceData = async function() {
    let salesModelJson = undefined; // String
    try {
      return await new Promise(async resolve => {
        salesModelJson = await getJSONDataFromlocalstorage();

        await convertJsonIntoSalesModel(salesModelJson);
        await bindCustomerRealatedData();
        await bindProductRelatedData();
        await salesCalculationdata();
        return resolve(true);
      });
    } catch (ex) {
      throw ex;
    }
  };
}

function onInvoicePageLoadEvent() {
  let invoiceControllerObj = null; //Object.

  try {
    invoiceControllerObj = new salesIvoiceController();
    invoiceControllerObj.showInvoiceData().then(resolve => {
      console.log(resolve);
    });
  } catch (ex) {
    console.log(ex.message);
    console.log(ex.stack);
  }
}

onInvoicePageLoadEvent();
