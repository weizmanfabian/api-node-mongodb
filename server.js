const express = require("express");
const bodyParser = require("body-parser");
const mesaRouter = require("./routes/mesaRouter");

const port = 5000;
const app = express();

app.listen(port, () => {
  console.log("Server is listening at port:" + port);
});

// Parses the text as url encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Parses the text as json
app.use(bodyParser.json());

app.use("/", mesaRouter);
