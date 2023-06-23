const express = require("express");

const app = express();

const port = 5000;
  
app.get("/test", (req, res) => {
  res.send("Hello World!");
});

app.get("/", (req, res) => {
  const x = 1;
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
