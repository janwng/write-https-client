function getAndPrintHTML(options) {

  var https = require('https');

  https.get(options, function(response) {

    var receivedChunk = '';
    response.setEncoding('utf8');

    response.on('data', function(data) {
       receivedChunk += data;
    });

    response.on('end', function() {
      console.log(receivedChunk);
    });
  });
}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};


getAndPrintHTML(requestOptions);
