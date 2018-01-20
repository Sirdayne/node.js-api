let express = require('express')
let app = express()

app.get('/', function(req, res){
  res.send('hello API!')
});

app.listen(3012, function(){
  console.log('APP started')
})