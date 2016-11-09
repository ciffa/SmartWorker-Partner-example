const express    = require( 'express' );
const path       = require('path');
const bodyParser = require('body-parser');
const cors       = require('cors');
const apiRoutes  = require('./controllers/api');

var app          = express();


// allow cross-domain access
app.use(cors());


// configure the app to parse JSON responses
app.use(bodyParser.json());



// Add the API routing
app.use( apiRoutes );





// Generic error handlers

// development error handler
// will print stacktrace
if (process.env.NODE_ENV === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {},
  });
});


module.exports = app;