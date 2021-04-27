const {element} = require('protractor');

class StatusPage {
    

    get AcceptButton() {
        return element(by.xpath("//div[text()='TestAddress, 162']//following::div[2]//child::span[1]"));
    }

    get CmpltdButton() {
        return element(by.xpath("//div[text()='TestAddress, 162']//following::div[3]"));
    }   

    get PizzaOrderAssert() {
        return element(by.xpath("//div[text()='TestAddress, 162']"));
    }    

    async getTextAddress(){
        return await this.PizzaOrderAssert.getText();
    }

    async getTextAccepted(){
        return await this.AcceptButton.getText();
    }

    async getTextCompleted(){
        return await this.AcceptButton.getText();
    }

    async acceptorder() {
        this.AcceptButton.click();        
    }

    async compltorder() {
        this.CmpltdButton.click();
    }
}

module.exports = new StatusPage();