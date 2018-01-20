let express = require('express')
let app = express()

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
});

app.get('/artists', (req, res) => {
  res.send(artists)
})

app.get('/artists/:id', (req, res) => {
  let artist = artists.find(a => a.id === Number(req.params.id))
  res.send(artist)
})


app.listen(3012, function(){
  console.log('APP started')
})