var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var random = require('mongoose-simple-random');


// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


// Setup model
var Noun;
var Adjective;
var nounSchema = mongoose.Schema({
    word: String
});
nounSchema.plugin(random);

var adjectiveSchema = mongoose.Schema({
    word: String
});
adjectiveSchema.plugin(random);


// DB
var dbConnection = (process.env.DB_ENDPOINT) ? process.env.DB_ENDPOINT : 'mongodb://localhost:27017/words-app'
mongoose.connect(dbConnection);


app.get('/', function (req, res) {

 var response = "";

  // Find a single random document
  Adjective.findOneRandom(function(err, result) {
    if (!err) {
      response = result.word;
      //console.log(response); // 1 element
    }
  });

  Noun.findOneRandom(function(err, result) {
    if (!err) {
      response += "_" + result.word;
      console.log(response); // 1 element


      if(response.length > 0) {
        res.status(200).send(response);
      } else {
        res.status(500).send("Some thing bad happened!");
      }
    }
  });
  
});

app.post('/noun', function (req, res) {

  var noun = new Noun({
    word: req.body.word
  });

  noun.save(function (err) {
    if (err) {
      res.status(503).send(err);
    } else {
      res.json(noun);
    }
  });

});

app.post('/adjective', function (req, res) {

  var adjective = new Adjective({
    word: req.body.word
  });

  adjective.save(function (err) {
    if (err) {
      res.status(503).send(err);
    } else {
      res.json(adjective);
    }
  });

});

app.listen(3000, function () {
  console.log('words-app listening on port 3000!');

  Noun = mongoose.model('Noun', nounSchema);
  Adjective = mongoose.model('Adjective', adjectiveSchema);
});
