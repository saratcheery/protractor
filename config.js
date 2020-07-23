
exports.config = {
    directConnect : true,
    capabilities: {
        "browserName" : 'chrome'
    },
    chromeOptions: {
      args: ["--incognito"]
    },
    framework : 'jasmine',    
    specs : ['./Tests/manageInventoryTestCases.js'],
    
        
}