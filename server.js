let express = require('express')
let bodyParser = require('body-parser')
let MongoClient = require('mongodb').MongoClient
let ObjectID = require('mongodb').ObjectID

let app = express()
let db

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
  res.send('node.js API')
})

app.get('/artists', (req, res) => {
  db.collection('artists').find().toArray((err, docs) => {
    if (err){
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(docs)
  })
})

app.get('/artists/:id', (req, res) => {
  db.collection('artists').findOne({ _id: ObjectID(req.params.id) }, (err, doc) => {
    if (err){
      console.log(err)
      return res.sendStatus(500)
    }
    res.send(doc)
  })
})

app.post('/artists', (req, res) => {
  let artist = {
    name: req.body.name
  }
  db.collection('artists').insert(artist, (err, result) => {
    if (err){
      console.log(error)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
    //res.send(artist)
  })
})

app.put('/artists/:id', (req, res) => {
  db.collection('artists').updateOne({ _id: ObjectID(req.params.id) }, { name: req.body.name }, (err, result) => {
    if (err){
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
})

app.delete('/artists/:id', (req, res) => {
  db.collection('artists').deleteOne({ _id: ObjectID(req.params.id) }, (err, result) => {
    if (err){
      console.log(err)
      return res.sendStatus(500)
    }
    res.sendStatus(200)
  })
})

MongoClient.connect('mongodb://localhost:27017/myapi', (err, database) => {
  if (err){
    return console.log(err)
  }
  db = database
  app.listen(3012, function(){
    console.log('APP started')
  })
})