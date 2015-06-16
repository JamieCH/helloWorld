'use strict';

var http = require('http');

var server = http.createServer(function(req, res){
    console.log('Header:' + req.headers);
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
        console.log('Partial Body:'+ body);
    });
    req.on('end', function(){
        console.log('Body:' + body);
    });    
    res.writeHead(200);
    res.end('hello nodejs server');
}).listen(3000);
