const { element, browser, Browser } = require("protractor");

let start_date = element(by.xpath("(//input[contains(@id,'mat-input')])[1]"));
let end_date = element(by.xpath("(//input[contains(@id,'mat-input')])[2]"));
let grn_id = element(by.xpath("(//input[contains(@id,'mat-input')])[3]"));
let rgp_no = element(by.xpath("(//input[contains(@id,'mat-input')])[3]"));
let nrgp_no = element(by.xpath("(//input[contains(@id,'mat-input')])[3]"));
let status = element(by.xpath("(//input[contains(@id,'mat-input')])[4]"));
let clear_button = element(by.xpath("//span[contains(text(),'Clear')]"));
let manageInventory = element(by.xpath("//div[text()='Manage Inventory']"));
let expected_value = element(by.xpath("//tbody[@role='rowgroup']//td[3]"));
let rgp = element(by.xpath("//div[@class='mat-tab-labels']/div[2]"));
let nrgp = element(by.xpath("//div[@class='mat-tab-labels']/div[3]"));




var FeatureMInventory = function(){

 this.click_manageInventory = function(){
    
    browser.actions().mouseMove(manageInventory).click().perform().then(function(){
  
        browser.sleep(2000);
    });

 };

 this.click_rgp = function(){

    rgp.click().then(function(){

        browser.sleep(2000);

    });

  };

  this.click_nrgp = function(){

    nrgp.click().then(function(){

        browser.sleep(2000);

    });

  };

  this.set_startDate = function(){

      
        browser.actions().mouseMove(end_date).click().perform().then(function(){

        
        start_date.click().then(function(){

            
            start_date.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
            start_date.sendKeys('6/18/2020');

        });
        //static data
    });
    
    
};

   this.set_endDate = function(){

    
    end_date.click().then(function(){


        start_date.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        start_date.sendKeys('7/22/2020');

    });
   
};

   this.set_grnId = function(){


    grn_id.click().then(function(){

    
        browser.sleep(2000);
        grn_id.sendKeys("GRNPIN0047");
    });
};

   this.set_rgp = function(){


    grn_id.click().then(function(){

    
        browser.sleep(2000);
        rgp_no.sendKeys("RGPPIN0012");
    });
};


this.set_nrgp = function(){


    grn_id.click().then(function(){

    
        browser.sleep(2000);
        nrgp_no.sendKeys("NRGPPIN0016");
    });
};


  this.set_status = function(){

    status.click().then(function(){

        browser.sleep(2000);
        status.sendKeys("GRN RAISED");
    });
};


this.set_rgp_status = function(){

    status.click().then(function(){

        browser.sleep(2000);
        status.sendKeys("PENDING FROM DM");
    });
};


this.set_nrgp_status = function(){

    status.click().then(function(){

        browser.sleep(2000);
        status.sendKeys("REJECTED");
    });
};



  this.clear = function(){

    clear_button.click().then(function(){

        browser.sleep(2000);
    });
}

  this.validate_grn = function(){


     expected_value.getText().then(function(item){
   
    let no = item.split("(");
    let expect1 = no[0];
    let expected = expect1.slice(0, -1);
    console.log(expected);
    expect(expected).toBe("GRNPIN0047");
            

});


  };

  this.validate_rgp = function(){

  expected_value.getText().then(function(item){

  console.log(item);
  expect(item).toBe("RGPPIN0012")

  });

  };

  this.validate_nrgp = function(){

    expected_value.getText().then(function(item){
  
    console.log(item);
    expect(item).toBe("NRGPPIN0016")
  
    });
  
    };

};

module.exports = new FeatureMInventory();