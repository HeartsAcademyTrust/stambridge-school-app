var express = require('express');
var path = require('path');

const app = express();

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/*', function response(req, res) {
  res.sendFile(__dirname+'/public/index.html');
});

app.listen(server_port, server_ip_address, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});