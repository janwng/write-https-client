var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
};

function printUpperCase(html) {
  var upperCase = html.toUpperCase();
  console.log(upperCase);
}

// getHTML(requestOptions, printHTML); <- this works too?
getHTML(requestOptions, printUpperCase);