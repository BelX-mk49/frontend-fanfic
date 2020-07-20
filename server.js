const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const compression = require('compression');

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist/frontend-fanfic')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/frontend-fanfic/index.html'));
});

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log("running"));
