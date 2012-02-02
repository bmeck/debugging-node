#!/usr/bin/env node
var http = require('http');
var server = http.createServer(function(req,res){res.end('OK');});
server.listen(process.env.port || 8080)

