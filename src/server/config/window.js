
const window2 =  require('svgdom').createSVGWindow()
require('svg.js')(window2)
global.window  = window2.document;

// const MockBrowser = require('mock-browser').mocks.MockBrowser;
// const AbstractBrowser = require('mock-browser').delegates.AbstractBrowser;
// const browser = new AbstractBrowser(MockBrowser.createWindow());

// global.window = browser.getWindow();
// global.document = browser.getDocument();
// global.navigator = browser.getNavigator();

// global.location = browser.getLocation();
// global.history = browser.getHistory();
// global.localStorage = browser.getLocalStorage();
// global.sessionStorage = browser.getSessionStorage();
// console.log(doc.document)

