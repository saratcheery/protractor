var LT = require('../pages/LTLogin.js');
var MI = require('../pages/ManageInventory.js');
const { browser } = require('protractor');






describe("Manage Inventory Test cases" , function(){

    beforeAll(function()
  {
     browser.manage().timeouts().implicitlyWait(3000);
     browser.manage().window().maximize();
     LT.jhLogin();
  });




it("validate start date, end date , grn , status" , function(){



    MI.click_manageInventory();
    MI.set_startDate();
    MI.set_endDate();
    MI.set_grnId();
    MI.set_status();
    MI.validate_grn();
    MI.clear();



});


it("validate start date, end date , rgp , status" , function(){



    MI.click_rgp();
    MI.set_startDate();
    MI.set_endDate();
    MI.set_rgp();
    MI.set_rgp_status();
    MI.validate_rgp();
    MI.clear();



});


it("validate start date, end date , rgp , status" , function(){



    MI.click_nrgp();
    MI.set_startDate();
    MI.set_endDate();
    MI.set_nrgp();
    MI.set_nrgp_status();
    MI.validate_nrgp();
    MI.clear();



});





});

