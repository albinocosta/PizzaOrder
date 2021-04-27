exports.config = {    
    capabilities:{
        browserName: "chrome",
        unexpectedAlertBehaviour: 'accept'
    },
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/neworder.spec.js']
    
};

