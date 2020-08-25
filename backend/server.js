const express = require("express");

var app = express();

var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`node server is running at ${port}`);
});
