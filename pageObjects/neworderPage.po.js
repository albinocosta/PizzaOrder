const {element, browser} = require('protractor');

class NewOrderPage {    

    get NameField() {
        return element(by.css('input[formcontrolname="name"]'));
    }

    get EmailField() {
        return element(by.css('input[formcontrolname="email"]'));
    }

    get AddressField() {
        return element(by.css('input[formcontrolname="address"]'));
    }

    get ContactNumber() {
        return element(by.css('input[formcontrolname="phone"]'));
    }
    
    get LargeButton() {
        return element(by.xpath('//button[text()=" Large "]'));
    }

    get PeppButton() {
        return element(by.xpath('//button[text()=" Pepperoni "]'));
    }

    get OnionButton() {
        return element(by.xpath('//button[text()=" Onion "]'));
    }

    get PlaceButton() {
        return element(by.xpath('//button[text()=" Place Order "]'));
    }

    async placeorder(name, email, address, phone) {
        browser.wait(ExpectedConditions.visibilityOf(this.NameField), 5000);
        this.NameField.sendKeys(name);
        this.EmailField.sendKeys(email);
        this.AddressField.sendKeys(address);
        this.ContactNumber.sendKeys(phone);
        this.LargeButton.click();
        this.PeppButton.click();
        this.OnionButton.click();
        this.PlaceButton.click();        
    }


}

module.exports = new NewOrderPage();