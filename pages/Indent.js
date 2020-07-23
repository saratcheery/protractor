var { element, by, browser, navigate } = require("protractor");
var faker = require("faker");
const LTLogin = require("./LTLogin");

var requestNewbtn = by.buttonText("REQUEST NEW");
//var clickrequestNewbtn = await element(by.buttonText("REQUEST NEW")).click();
var title = by.xpath("//input[@placeholder='Title']");
var datetime = Date.now();
var emergencychkbx = by.className("mat-checkbox-inner-container");
var materialsdd = by.xpath("(//span[text()=' '])[2]");
var namesdd  = by.xpath("(//span[text()=' '])[2]");
var namesdd1  = by.xpath("(//span[text()=' '])[3]");
var qty = by.xpath("//input[@ng-reflect-name='quantity']");
var addnewitem = by.xpath("//button[@class='mat-focus-indicator mat-icon-button mat-button-base ng-star-inserted']/span");
var comments = by.xpath("//textarea[@formcontrolname='comments']");
var savebtn = by.xpath("//span[text()='Save']");
var resetbtn = by.xpath("//span[text()='Reset']");
var backbtn = by.xpath("//span[text()=' Back ']");
var reagent = by.xpath("//span[text()=' REAGENT ']");
var creatinine = by.xpath("(//span[text()=' creatinine '])[1]");
var consumable = by.xpath("//span[text()=' CONSUMABLE ']");
var urinecont = by.xpath("//span[text()=' URINE CONTAINER ']");
var qty2 = by.xpath("(//input[@ng-reflect-name='quantity'])[2]");
var newIndentUrl = "https://lab.medeintegra.app/lis/ls/request-indent";
var firstviewbtn = by.xpath("(//span[text()='view'])[1]");
var emrtestTitle = ("EmergencyTest"+ datetime).toUpperCase().toString();
var testTitle = ("Test"+ datetime).toUpperCase().toString();
var perpage = by.xpath("//mat-select[@role='listbox'][@aria-label='Items per page:']");
var itemsperpage = by.xpath("//span[text()=' 100 ']");
var ltname = "VIJAY KUMAR";
var partialindentId = "INDTPIN";
var normal = "NORMAL"
var pendingDMStatus = "PENDING FROM DM";
var emergency = "EMERGENCY";
var titletextbox = by.xpath("//input[@ng-reflect-placeholder='Title']");
var statusddl = by.xpath("(//mat-select[@role='listbox'])[1]");
var pendingDM = by.xpath("//span[text()=' PENDING FROM DM ']");
var emrgencyCheckbox = by.className("mat-checkbox-inner-container");
var firstTitlexpath = by.xpath("//tr[1]/td[@role='gridcell'][2]");

        var createddate = function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; 
            var yyyy = today.getFullYear();
            if(dd<10) 
            {
                dd='0'+dd;
            }
            if(mm<10) 
            {
                mm='0'+mm;
            } 
            today = dd+'/'+mm+'/'+yyyy;
            console.log(today);
            };

// function randomXToY(minVal,maxVal)
// {
//   var randVal = minVal+(Math.random()*(maxVal-minVal));
//   return Math.round(randVal);
// }
// var random = randomXToY(101, 999);

var random = faker.random.number({'min': 101,'max': 999});

var formatteddate  = function()
{
	var dt = new Date();
	date = dt.getDate();
	if(date.length<2)
	{
	  date = '0'+ date;	
	}
	month = dt.getMonth();
	if (month.length < 2)
	{ 
          month = '0' + month;
	}
	year = dt.getFullYear();
currentdate = dt.getDate()+"/"+(dt.getMonth()+1)+"/"+dt.getFullYear();
}

var featureIndent = function ()
{  
 
    this.requestNewIndent_back = async function()
    {   
       //browser.executeScript("arguments[0].click();",clickrequestNewbtn);
       await element(requestNewbtn).click();
       browser.sleep(2000);           
       var currentUrl = await browser.getCurrentUrl();
       if(currentUrl == newIndentUrl)
       {
           console.log("Url is good");
       }       
       else
       {
        await element(requestNewbtn).click();
       }
       await element(title).clear();
       await element(title).sendKeys(testTitle);
       browser.sleep(1000);
       console.log(element(title).getCssValue("color"));
       await element(emergencychkbx).click();
       element(materialsdd).click();
       browser.sleep(1000);
       var clickreagent = element(materialsdd).element(reagent).click();
       browser.executeScript("arguments[0].click();",clickreagent)
       element(namesdd).click();       
       element(namesdd).element(creatinine).click();
       await element(qty).click();
       await element(qty).sendKeys(random);
       await element(addnewitem).click();
       element(materialsdd).click();
       element(materialsdd).element(consumable).click();
       element(namesdd).click();
       element(namesdd).element(urinecont).click();
       await element(qty2).click();
       await element(qty2).sendKeys(random);
       await element(comments).clear();
       await element(comments).sendKeys("Comments from LT to Raise Indent");
       await element(backbtn).click();      
       var requestnewbtnpresent = await element(requestNewbtn).isPresent();
       console.log(requestnewbtnpresent);
       expect(requestnewbtnpresent).toBe(true);
       browser.sleep(2000);                  
    };

    this.requestNewIndent_reset = async function()
    {
        await element(requestNewbtn).click();
       browser.sleep(2000);           
       var currentUrl = await browser.getCurrentUrl();
       if(currentUrl == newIndentUrl)
       {
           console.log("Url is good");
       }       
       else
       {
        await element(requestNewbtn).click();
       }
       await element(title).clear();
       await element(title).sendKeys(testTitle);
       browser.sleep(1000);
       console.log(element(title).getCssValue("color"));
       await element(emergencychkbx).click();
       element(materialsdd).click();
       browser.sleep(1000);
       var clickreagent = element(materialsdd).element(reagent).click();
       browser.executeScript("arguments[0].click();",clickreagent)
       element(namesdd).click();       
       element(namesdd).element(creatinine).click();
       await element(qty).click();
       await element(qty).sendKeys(random);
       await element(addnewitem).click();
       element(materialsdd).click();
       element(materialsdd).element(consumable).click();
       element(namesdd).click();
       element(namesdd).element(urinecont).click();
       await element(qty2).click();
       await element(qty2).sendKeys(random);
       await element(comments).clear();
       await element(comments).sendKeys("Comments from LT to Raise Indent");
       await element(resetbtn).click();
       var savebtnpresent = await element(savebtn).isPresent();
       console.log(savebtnpresent);
       expect(savebtnpresent).toBe(true);
       browser.sleep(2000);               
    };

    this.requestNewIndent_save = async function()
    {
        //browser.executeScript("arguments[0].click();",clickrequestNewbtn);
       await element(requestNewbtn).click();
       browser.sleep(2000);           
       var currentUrl = await browser.getCurrentUrl();
       //expect(currentUrl).toBe(newIndentUrl);
       if(currentUrl == newIndentUrl)
       {
           console.log("Url is good");
       }       
       else
       {
        await element(requestNewbtn).click();
       }
        await element(title).clear();
        var requestnewtitle = await element(title).sendKeys(testTitle);                
        element(materialsdd).click();
        element(materialsdd).element(reagent).click();
        element(namesdd).click();
        element(namesdd).element(creatinine).click();
        await element(qty).click();
        await element(qty).sendKeys(random);
        await element(addnewitem).click();
        element(materialsdd).click();
        element(materialsdd).element(consumable).click();
        element(namesdd).click();
        element(namesdd).element(urinecont).click();
        await element(qty2).click();
        await element(qty2).sendKeys(random);
        await element(comments).clear();
        await element(comments).sendKeys("Comments from LT to Raise Indent");
        await element(savebtn).click();    
        console.log(requestnewbtnpresent);
        expect(requestnewbtnpresent).toBe(true);
        browser.sleep(2000);  
        
        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(500);
        element(perpage).click();
        browser.sleep(1000);
        element(itemsperpage).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(500);
        
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";
        
        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == testTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(testTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(createddate);
                        expect(namet[5]).toEqual(normal);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }            
        }
        
    };

    this.requestNewIndent_alloptions_save = async function()
    {
        //browser.executeScript("arguments[0].click();",clickrequestNewbtn);
       await element(requestNewbtn).click();
       browser.sleep(2000);           
       var currentUrl = await browser.getCurrentUrl();
       //expect(currentUrl).toBe(newIndentUrl);
       if(currentUrl == newIndentUrl)
       {
           console.log("Url is good");
       }       
       else
       {
        await element(requestNewbtn).click();
       }
        await element(title).clear();        
        var requestemtitle = await element(title).sendKeys(emrtestTitle);
        browser.sleep(500);
        await element(emergencychkbx).click();
        element(materialsdd).click();
        element(materialsdd).element(reagent).click();
        element(namesdd).click();
        element(namesdd).element(creatinine).click();
        await element(qty).click();
        await element(qty).sendKeys(random);
        await element(addnewitem).click();
        element(materialsdd).click();
        element(materialsdd).element(consumable).click();
        element(namesdd).click();
        element(namesdd).element(urinecont).click();
        await element(qty2).click();
        await element(qty2).sendKeys(random);
        await element(comments).clear();
        await element(comments).sendKeys("Comments from LT to Raise Indent");
        await element(savebtn).click();    
       console.log(requestnewbtnpresent);
       expect(requestNewbtn).toBe(true);
        browser.sleep(2000);           

        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(500);
        element(perpage).click();
        element(itemsperpage).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(500);
        
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";

        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == testTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(testTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(createddate);
                        expect(namet[5]).toEqual(emergency);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }            
        }
        
    };

    this.requestNewIndent_savewithoutdata = async function()
    {
        //browser.executeScript("arguments[0].click();",clickrequestNewbtn);
        await element(requestNewbtn).click();
       browser.sleep(2000);           
       var currentUrl = await browser.getCurrentUrl();
       if(currentUrl == newIndentUrl)
       {
           console.log("Url is good");
       }       
       else
       {
        await element(requestNewbtn).click();
       }
        await element(savebtn).click();    
        browser.sleep(2000);           
        var backbtnpresent = await element(backbtn).isPresent();
        expect(backbtnpresent).toBe(true);
        expect(savebtnpresent).toBe(true);
        browser.sleep(2000);           
    };

    this.veiwIndent = async function()
    {
        await element(firstviewbtn).click();
        browser.sleep(2000);
        var titlelabel = await element(by.xpath("//strong[text()='Title:']")).getText();
        expect(titlelabel).toEqual("TITLE:"); 
        var titleinVeiw = await element(by.xpath("(//div[@ng-reflect-fx-flex='45'])[2]")).getText();
        expect(titleinVeiw).toEqual(requestemtitle); 
        var indentIdlabel = await element(by.xpath("//strong[text()='Indent Id: ']")).getText();        
        expect(indentIdlabel).toEqual("INDENT ID:");
        var indentIdinVeiw = await element(by.xpath("(//div[@ng-reflect-fx-flex='45'])[4]")).getText();
        expect(indentIdinVeiw).toContain("INDTPIN");         
        var indentprioritylabel = await element(by.xpath("//strong[text()='Indent Priority: ']")).getText();
        expect(indentprioritylabel).toEqual("INDENT PRIORITY:");
        var indentpriorityinVeiw = await element(by.xpath("//div[text()=' EMERGENCY ']")).getText(); 
        expect(indentpriorityinVeiw).toEqual("EMERGENCY");  
        var statuslabel = by.xpath("//strong[text()='Status:']");
        expect(statuslabel).toEqual("STATUS:");
        var statusinVeiw = await element(by.xpath("//div[text()=' PENDING FROM DM ']")).getText();
        expect(statusinVeiw).toEqual("PENDING FROM DM");
        var commentslabel = await element(by.xpath("//strong[text()='Comments:']")).getText();
        expect(commentslabel).toEqual("COMMENTS:");
        var commentsinVeiw = await element(by.xpath("//div[text()=' Comments from LT to Raise Indent ']")).getText();
        expect( commentsinVeiw).toEqual("COMMENTS FROM LT TO RAISE INDENT");
        var materialtypecolHeader = await element(by.xpath("//th[@role='columnheader'])[1]")).getText();
        expect(materialtypecolHeader).toEqual("MATERIAL TYPE");
        var namecolHeader = await element(by.xpath("(//th[@role='columnheader'])[2]")).getText();
        expect(namecolHeader).toEqual("NAME");
        var qtycolHeader = await element(by.xpath("(//th[@role='columnheader'])[3]")).getText();
        expect(qtycolHeader).toEqual("QUANTITY");
        var unitscolHeader = await element(by.xpath("(//th[@role='columnheader'])[4]")).getText();
        expect(unitscolHeader).toEqual(UNITS);
        var uhidcolHeader = await element(by.xpath("(//th[@role='columnheader'])[5]")).getText();
        expect(uhidcolHeader).toEqual("UHID");
        var firstmaterialtype = await element(by.xpath("(//td[@role='gridcell'])[1]")).getText();
        expect(firstmaterialtype).toEqual("REAGENT");
        var secondmaterialtype = await element(by.xpath("(//td[@role='gridcell'])[6]")).getText(); 
        expect(secondmaterialtype).toEqual("CONSUMABLE");
        var firstname = await element(by.xpath("(//td[@role='gridcell'])[2]")).getText();
        var firstnamelabel = await element(firstname).getText();
        expect(firstnamelabel).toEqual("CREATININE");
        var secondname = by.xpath("(//td[@role='gridcell'])[7]");
        var secondnamelabel = await element(secondname).getText();
        expect(secondnamelabel).toEqual("URINE CONTAINER");
        var firstqty = by.xpath("(//td[@role='gridcell'])[3]");
        var firstqtylabel = await element(firstqty).getText();
        expect(firstqtylabel).toEqual(random);
        var secondqty = by.xpath("(//td[@role='gridcell'])[8]");
        var secondqtylabel = await element(secondqty).getText();
        expect(secondqtylabel).toEqual(random);
        var firstunits = by.xpath("(//td[@role='gridcell'])[4]");
        var firstunitslabel = await element(firstunits).getText();
        expect(firstunitslabel).toBe("MICROLITRE");
        var second = by.xpath("(//td[@role='gridcell'])[9]");
        var secondlabel = await element(second).getText();
        expect(secondlabel).toBe("NO");
        var firstuhid = by.xpath("//td[@role='gridcell'])[5]");
        var firstuhidlabel = await element(firstuhid).getText();
        expect(firstuhidlabel).toBe(LABREA2);
        var seconduhid = by.xpath("//td[@role='gridcell'])[10]");
        var seconduhidlabel = await element(seconduhid).getText();        
        expect(seconduhidlabel).toBe(LABREA3);
        browser.sleep(2000);
    };

    this.veiwIndent_back = async function()
    {
        await element(firstviewbtn).click();
        browser.sleep(2000);
        await element(backbtn).isPresent();
        await element(backbtn).click();
        browser.sleep(2000);
        var reuestnewpresent = element(requestNewbtn).isPresent();        
        expect(reuestnewpresent).toBe(true);
    }

    this.gridList = async function()
    {
        var srnocolheader = await element(by.xpath("(//button[@type='button'])[3]")).getText();    
        expect(srnocolheader).toEqual("S.NO");        
        var titlecolheader = await element(by.xpath("(//button[@type='button'])[4]")).getText();
        expect(titlecolheader).toEqual("TITLE");
        var indnetIdcolheader = await element(by.xpath("(//button[@type='button'])[5]")).getText();
        expect(indnetIdcolheader).toEqual("INDENT ID");
        var raisedbycolheader = await element(by.xpath("(//button[@type='button'])[6]")).getText();
        expect(raisedbycolheader).toEqual("RAISED BY");
        var indentDatecolheader = await element(by.xpath("(//button[@type='button'])[7]")).getText();
        expect(indentDatecolheader).toEqual("INDENT DATE");
        var emergencycolheader = await element(by.xpath("(//button[@type='button'])[8]")).getText();
        expect(emergencycolheader).toEqual("EMERGENCY");
        var statuscolheader = await element(by.xpath("(//button[@type='button'])[9]")).getText();
        expect(statuscolheader).toEqual("STATUS");
        var actionscolheader = await element(by.xpath("//th[text()='ACTIONS']")).getText();
        expect(actionscolheader).toEqual("ACTIONS");
        var firstsrno = await element(by.xpath("(//td[@role='gridcell'])[1]")).getText();
        expect(firstsrno).toEqual("1");
        var firsttitle = await element(by.xpath("(//td[@role='gridcell'])[2]")).getText();
        expect(firsttitle).toEqual(requestemtitle);
        var firstindentid = await element(by.xpath("(//td[@role='gridcell'])[3]")).getText();
        expect(firstindentid).toContain("INDTPIN");
        var firstraisedby = await element(by.xpath("(//td[@role='gridcell'])[4]")).getText();
        expect(firstraisedby).toBe("VIJAY KUMAR");
        var firstindentdate = await element(by.xpath("(//td[@role='gridcell'])[5]")).getText();
        expect(firstindentdate).toContain(formatteddate);
        var firstemergency = await element(by.xpath("(//td[@role='gridcell'])[6]")).getText();
        expect(firstemergency).toBe("EMERGENCY");
        var firststatus = await element(by.xpath("(//td[@role='gridcell'])[7]")).getText();
        expect(firststatus).toBe("PENDING FROM DM");      
        await element(firstviewbtn).isPresent();
    };

    this.gridItemsNormal = async function()
    {   
        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(500);
        element(perpage).click();
        browser.sleep(1000);
        element(itemsperpage).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(500);
        
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";
        
        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == testTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(testTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(formatteddate);
                        expect(namet[5]).toEqual(normal);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }            
        }
    };

    this.gridItemsEmergency = async function()
    {   
        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(500);
        element(perpage).click();
        element(itemsperpage).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(500);
        
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";

        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == testTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(testTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(formatteddate);
                        expect(namet[5]).toEqual(emergency);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }            
        }
    };

    this.gridItems = async function()
    {   
        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(500);
        element(perpage).click();
        element(itemsperpage).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(500);
        
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";

        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == testTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(testTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(createddate);
                        expect(namet[5]).toEqual(normal);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }            
        }
    };

    this.filterbyTitle = async function()
    {
        element(titletextbox).clear();
        var firstTitle = await element(firstTitlexpath).getText();
        element(titletextbox).sendKeys(firstTitle);              
        browser.executeScript('window.scrollTo(0,500);');
        browser.sleep(500);
        element(perpage).click();
        browser.sleep(1000);
        element(itemsperpage).click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(0,0);');
        browser.sleep(500);
        
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";
        
        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == firstTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(firstTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(createddate);
                        expect(namet[5]).toEqual(normal);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }           
        }
    };

    this.filterbyStatus = async function()
    {
        element(statusddl).click();
        browser.sleep(1000);
        element(statusddl).element(pendingDM).click();
        browser.sleep(1000);
        var firstTitle = await element(firstTitlexpath).getText();
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";
        
        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == firstTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(firstTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(createddate);
                        expect(namet[5]).toEqual(emergency);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }           
        }
    };
    
    this.filterbyEmergency = async function()
    {        
        element(emrgencyCheckbox).click();       
        browser.sleep(1000);
        var firstTitle = await element(firstTitlexpath).getText();
        var part1 = "//tr[";
        var part2 = "]/td[@role='gridcell'][2]";
        var part3 = "]/td[@role='gridcell']";
        
        for(i=1; i<=100; i++)
        {
            var xpath = part1+ i + part2;
            var namet = await element(by.xpath(xpath)).getText();   
            if(namet == firstTitle)
                    {                     
                        var xpath = part1 + i + part3;
                        var namet = await element.all(by.xpath(xpath)).getText();
                        expect(namet[1]).toEqual(firstTitle);
                        expect(namet[2]).toContain(partialindentId);
                        expect(namet[3]).toEqual(ltname);
                        expect(namet[4]).toHave(createddate);
                        expect(namet[5]).toEqual(emergency);
                        expect(namet[6]).toEqual(pendingDMStatus);
                        break;
                    }           
        }
    };

    this.dateRange = async function()
    {
        var startdate = by.xpath("//div[@class='mat-form-field-infix ng-tns-c129-9']");
        var enddate = by.xpath("(//input[@ng-reflect-mat-datepicker='[object Object]'])[2]");
        
    };

    this.itemsperPage = function()
    {

    };

    this.navigatePages = function()
    {

    };
};

module.exports = new featureIndent();