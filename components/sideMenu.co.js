const {element, browser} = require('protractor');

class SideMenu {

    async visit(){
        browser.waitForAngularEnabled(false);        
        browser.manage().window().maximize();
        browser.get('http://localhost:4200/');
    }

    get NewOrder() {
        return element(by.xpath('//a[text()=" New Order "]'));
    }

    get Status() {
        return element(by.xpath('//a[text()=" Status "]'));
    }

    async goneworderpage () {
        //browser.wait(ExpectedConditions.elementToBeClickable(this.NewOrder), 5000);
        this.NewOrder.click();
    }

    async gostatusmenupage () {        
        this.Status.click();
    }
}

module.exports = new SideMenu();