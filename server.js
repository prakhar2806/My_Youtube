const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const video = require('./routes/video.route');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Prakhar:WORDlife2806!@cluster0-7v3cp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("youtube_videos_db").collection("youtube_videos_collection");
  // perform actions on the collection object
  
  client.close();
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/videos', video);

app.use('/getVideo', (req,res) => {
  res.send({ express: 'getVideo is connected' });
});

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
