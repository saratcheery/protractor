var LT = require('../pages/LTLogin.js');
var Indent = require('../pages/Indent.js');
const { browser } = require('protractor');


describe("Tests related to Indent", function()
{
 /* beforeAll(function()
  {
    browser.manage().window().maximize();
    LT.loginLT();

  });
    beforeEach(function()
    {
      LT.gotoIndentPage();           
    }); */

    it("TC01 Back button functionality for New Indent", async function()
    {
      //Indent.requestNewIndent_back();    
     //LT.loginLT();
     browser.manage().timeouts().implicitlyWait(3000);
     browser.manage().window().maximize();
     LT.jhLogin();
     //LT.docLogin();
     //LT.gotoIndentPage();
      
    });

   /* it("TC02 Reset button functionality for New Indent", function()
    {
      Indent.requestNewIndent_reset();
    });

    it("TC03 Request new Indent with no data in it", function()
    {
      Indent.requestNewIndent_savewithoutdata();
    });

    it("TC04 Request new Indent with all fields", function()
    {
      Indent.requestNewIndent_alloptions_save();
    });

    it("TC05 Request new Indent with only mandatory fields", function()
    {
      Indent.requestNewIndent_save();
    });

    it("TC06 Veiw first Indent", function()
    {
      Indent.veiwIndent();
    });

    it("TC07 Check Back button in Veiw Indent page", function()
    {
      Indent.veiwIndent_back();
    });

    it("TC08 Check the grid with data", function()
    {
      Indent.gridList();
    });
    
    fit("TC09 Check items in the grid", function()
    {
      Indent.gridItems();
    });

    it("TC10 Check Tilte Filter on Indent Page", function()
    {
      Indent.filterbyTitle();      
    });

    it("TC11 Check Status Filter on Indent Page", function()
    {
      Indent.filterbyStatus();      
    }); 

    it("TC12 Check items based on Emergency", function()
    {
      Indent.filterbyEmergency();     
    }); */



});