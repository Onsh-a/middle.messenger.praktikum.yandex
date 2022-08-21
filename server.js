const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/');
});

app.listen(PORT, () => {
  console.log(`server's up and running on port ${PORT}`);
})
