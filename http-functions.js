module.exports = function getHTML(options, callback) {

  var https = require('https');

  https.get(options, function(response) {

    var receivedChunk = '';
    response.setEncoding('utf8');

    response.on('data', function(data) {
       receivedChunk += data;
    });

    response.on('end', function() {
      printHTML(receivedChunk);
    });
  });
};

function printHTML(html) {
  console.log(html);
}
