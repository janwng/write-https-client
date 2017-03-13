var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};


// getHTML(requestOptions, printHTML); <- this works too?
getHTML(requestOptions);