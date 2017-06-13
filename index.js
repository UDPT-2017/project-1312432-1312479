  var express = require('express');
  var app = express();
  const pool = require('./lib/db');

  require('./config')(app);



  app.listen(process.env.PORT || 3000, function() {
      console.log('Example app listening on port 3000!');
  });
