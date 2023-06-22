//express install and create a instance.(npm install express --save)
//question details..
//express instance.
const express = require("express");
const app = express();

//get api text home page route:/;

app.get("/", (request, response) => {
  response.send("Home Page");
});

//get api text res about page route:/about;

app.get("/about", (request, response) => {
  response.send("About Page");
});
//app.listen(3000);
module.exports = app;
