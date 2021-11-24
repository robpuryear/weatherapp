var express = require('express');
var app = express();
var PORT = 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/weather', function(req, res) {
    res.send('You sent the name "' + req.body.city + '".');
  });

// pulls in the public directory as the main page
// http://localhost:3000
app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
    console.log('Express server running on port ' + PORT);
});