const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/');
});

app.listen(PORT, () => {
  console.log(`server is up and running on port ${PORT}`);
})
