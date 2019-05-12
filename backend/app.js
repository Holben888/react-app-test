const express = require('express');

const app = express();
const port = 3001;

app.get('/test', (req, res) => {
  res.status(200);
  res.send({ yeet: 'neat' });
});

app.listen(port, () => console.log(`App listening on port ${port}`));
