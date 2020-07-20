const express = require('express');

const app = express();

app.use(express.static('./dist/frontend-fanfic'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/frontend-fanfic/'}),
);

app.listen(process.env.PORT || 4200);
