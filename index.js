const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});
//127.0.0.1
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

