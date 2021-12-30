const express = require('express');
const app = express();
const runcl = require('runcl');
const os = require('os');
const port = 8080
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, access-token, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.get('/', function (req, res) {
  res.send({
    mensaje: 'Hola mundo',
    status: 'ok',
    version: '1.0.4',
    hostname: os.hostname()
  });
});

app.get('/:run', function (req, res) {
    res.send(runcl.run(req.params.run));
});

app.listen(port || 8080, function () {
  console.log(`Aplicacion que transforma los ruts, listen on port => ${port}`);
});
