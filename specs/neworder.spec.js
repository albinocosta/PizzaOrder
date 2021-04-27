const { expect } = require('chai');
const { browser } = require('protractor');

var sideMenu = require('../components/sideMenu.co.js');
var newOrder = require('../pageObjects/neworderPage.po.js');
var status = require('../pageObjects/statusPage.po.js');

describe('Create, accept and complete a new pizza order: ', function(){
    beforeAll(function(){
        sideMenu.visit();
    });

    it('create a new pizza order',
    async function(){
        await sideMenu.goneworderpage();
        newOrder.placeorder('Josh Baker','josh.baker@gmail.com','TestAddress, 162','+1712864896');
        sideMenu.gostatusmenupage();
        expect(await status.getTextAddress()).to.be.eq('TestAddress, 162');
    })

    it('accept the new pizza order',
    async function(){
        status.acceptorder();
        expect(await status.getTextAccepted()).to.be.eq('Accepted');
    })

    it('mark as completed the order',
    async function(){
        status.compltorder();
        expect(await status.getTextCompleted()).to.be.eq('Completed');
    })

    afterAll(function(){
        browser.close;
    })    
});