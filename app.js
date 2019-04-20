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
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', routes);

app.listen(PORT, () => {
  debug(`Server started on port ... ${chalk.red(PORT)}`);
});
