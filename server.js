let express = require('express')
let bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

let artists = [
  {
    id: 0,
    name: 'artist1'
  },
  {
    id: 1,
    name: 'artist2'
  },
  {
    id: 2,
    name: 'artist3'
  },
]

app.get('/', function(req, res){
  res.send('hello API!')
})

app.get('/artists', (req, res) => {
  res.send(artists)
})

app.get('/artists/:id', (req, res) => {
  let artist = artists.find(a => a.id === Number(req.params.id))
  res.send(artist)
})

app.post('/artists', (req, res) => {
  let artist = {
    id: Date.now(),
    name: req.body.name
  }
  artists.push(artist)
  res.send(`200 - OK: ${artist.name} added`)
})

app.put('/artists/:id', (req, res) => {
  let artist = artists.find(a => a.id === Number(req.params.id))
  artist.name = req.body.name
  res.sendStatus(200)
})

app.delete('/artists/:id', (req, res) => {
  artists = artists.filter(a => a.id !== Number(req.params.id))
  res.sendStatus(200)
})

app.listen(3012, function(){
  console.log('APP started')
})