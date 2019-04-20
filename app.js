const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const debug = require("debug")("app");
const chalk = require("chalk");

const app = express();
const PORT = process.env.PORT || 4000;

// -- middleware --
app.use(morgan("dev"));



app.listen(PORT, () => {
  debug(`Server started on port ... ${chalk.red(PORT)}`);
});
