const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const debug = require('debug')('app');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 4000;

const routes = require('./routes/api');

// -- connect to mongodb
mongoose
  .connect('mongodb://localhost/ninjago', {
    useNewUrlParser: true
  })
  .then(() => debug('DB Connection successful!'))
  .catch((err) => {
    debug('Database Error:');
    debug(JSON.stringify(err));
  });

// -- middleware --
// -- request body middleware
app.use(bodyParser.json());
// -- messaging middleware
app.use(morgan('dev'));
// -- routing middleware
app.use('/api', routes);

// -- error handling middleware
app.use((err, req, res, next) => {
  debug(err);
  res.status(422).send({
    error: err.errors.name.message
  });
});

app.listen(PORT, () => {
  debug(`Server started on port ... ${chalk.red(PORT)}`);
});
