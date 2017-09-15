var http = require ('http');
var myServer = http.createServer(function(request, response) {
  response.writeHead(200, {'Content_Type' : 'text/html'});
  response.write('<b>Hello</b> World' );
  response.end();
}); 

myServer.listen(3000);