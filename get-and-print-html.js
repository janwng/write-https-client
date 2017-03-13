function getAndPrintHTML() {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {

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

getAndPrintHTML();


//append each chunk of data to variable (var x = chunk)
//if __ all chubnkjs hava arrived -> console log the data (console.log(x))
