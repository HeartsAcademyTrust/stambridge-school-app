var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.development.config');

var app = express();
var compiler = webpack(config);

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/font', express.static(path.join(__dirname, 'font')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/node_modules/nanogallery/dist',
	express.static(path.join(__dirname, 'node_modules/nanogallery/dist')));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(server_port, server_ip_address, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening on ' + server_ip_address + ', server_port ' + server_port);
});
