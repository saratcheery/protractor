const { element, browser } = require("protractor");

var baseUrl = "https://lab.medeintegra.app/auth";
let  jhUrl = "https://sandbox.medeintegra.com/jharkhand/#/login";
var userLT = "labtechnician@medeintegra.app";
var passwordLT = "labtechnician@123";
var indentUrl = "https://lab.medeintegra.app/lis/ls/indenting";
let usernameJH = "BOK_PINDRAJORA_P1@JHDD.COM";
let passwordJH = "123456";
let loginbtn =  by.buttonText('Login as Existing User');
let username = by.id("username");
let password = by.id("password");
let jhUsername = by.xpath("//input[@id='email']");
let jhPassword = by.id("pwd")
let jhSignin = by.buttonText("Sign In");
let jhLogged = by.buttonText("ok");
let signin = by.buttonText("Continue");
let indentFromMenu = element(by.xpath("//div[text()='Indent']"));
let clearbtn = by.xpath("//span[text()='Clear']");
let labJH = by.xpath("//span[@title='Lab']");
let menu =element(by.xpath('//app-sidebar-nav'));
let home = element(by.xpath("//mat-icon[text()='home']"));
let manageInventory = element(by.xpath("//div[text()='Manage Inventory']"));




var featureLTLogin = function()
{
    this.loginLT =  function()
    {
        browser.ignoreSynchronization = true;
        browser.get(baseUrl);
        element(loginbtn).click().then(function(){

           // browser.sleep(1000);
            element(username).clear();
            element(username).sendKeys(userLT);
            element(password).clear();
            element(password).sendKeys(passwordLT);  
            element(signin).click().then(function(){

                browser.sleep(2000); 
    
            });  
       });
    };

    this.jhLogin = function() 
    {
        browser.ignoreSynchronization = true;
        browser.get(jhUrl).then(function(){

        browser.sleep(2000);

        element(jhUsername).sendKeys(usernameJH);
        element(jhPassword).sendKeys(passwordJH);
        element(jhSignin).click().then(function(){

            browser.sleep(2000);
            element(jhLogged).click();
            element(labJH).click().then(function(){

                browser.sleep(2000);
                browser.actions().mouseMove(home).perform().then(function(){

                    browser.sleep(2000);
                });
                

            })
         })

        });



    }
        
        this.docLogin = function()
        {

            browser.get("https://med-integra-angular.firebaseapp.com")
            element(by.id("inputEmail")).sendKeys("THAKUR_GP@JHARKHAND.COM");
            element(by.id("inputPassword")).sendKeys("123456");
            element(by.buttonText("Sign in")).click().then(function(){


                browser.sleep(5000);
                element(by.xpath("(//span[@class='ng-star-inserted'])[3]")).click().then(function(){


                browser.sleep(5000);
            });

            })
            


        }


    
    this.gotoIndentPage = function()
    {
       
        browser.actions().mouseMove(menu).perform().then(function(){

            
            indentFromMenu.click().then(function(){

                element(clearbtn).click().then(function(){

                    
                    var actUrl =  browser.getCurrentUrl();

                    expect(indentUrl).toEqual(actUrl);
            
        
                });

            });
            

        });
       
    };  
          
};

module.exports = new featureLTLogin();