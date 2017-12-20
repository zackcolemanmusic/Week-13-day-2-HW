const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client){
  if(err){
    console.log(err);
    return;
  }
  const db = client.db('cats');

  console.log("Connect to database");

  server.post('/api/cats', function(req, res){
    db.collection('cats').insert(req.body, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      console.log('Saved cat into DB');
      res.status(201);
      res.json(result.ops[0]);
    });
  });

  server.get('/api/cats', function(req, res){
    db.collection('cats').find().toArray(function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.json(result);
    });
  });

  server.delete('/api/cats', function(req, res){
    db.collection('cats').remove({},function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.status(204);
      res.send();
    })
  });

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
