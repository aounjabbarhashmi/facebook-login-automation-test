// import chrome driver
require("chromedriver");

// import selenium webdriver
let seleniumDriver = require("selenium-webdriver");

// get the browser instance
let seleniumBuilder = new seleniumDriver.Builder();
let browserTab = seleniumBuilder.forBrowser("chrome").build();

// open the browser
let browserWindow =
browserTab.get("https://www.facebook.com");

// resolve promises
browserWindow
   .then(function () {
      
      // set timeout for connection delay
      let timeOut = browserTab.manage().setTimeouts({
         implicit: 5000,
      });
      return timeOut;
   })
   .then(() => {
      
      // get a user input box
      let userInputBox = browserTab.findElement(
         seleniumDriver.By.css("#email")
      );
      return userInputBox;
   })
   .then((userNameInput) => {

      // send username keys
      let sendUserName = userNameInput.sendKeys("03333913158");
      return sendUserName;
   })
   .then(() => {
      console.log("Username filled!");
      
      // get a password input box
      let userPasswordBox = browserTab.findElement(
         seleniumDriver.By.css("#pass")
      );
      return userPasswordBox;
   })
   .then((passwordInput) => {
      
      // send password keys
      let sendPasswords = passwordInput.sendKeys("Aoun1234!!");
      return sendPasswords;
   })
   .then(() => {
      console.log("Password filled!");
      
      // get the continue button
      let continueButton = browserTab.findElement( 
         seleniumDriver.By.name("login")
      );
      return continueButton;
   })
   .then((continueBtn) => {
      
      // click on the continue button
      continueBtn.click();
      console.log("SignIN completed!");
   })
   .catch(function (error) {
      console.log("Error ", error);
   });