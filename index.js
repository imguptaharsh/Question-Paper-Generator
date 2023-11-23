// app.js
const express = require('express');
const questionController = require('./controllers/controller');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api/questions', questionController);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
