const express = require('express');
const app = express();
const PORT = 3000;







app.get('/greeting/:name', function (req, res){
  res.send(`<h1>Wut up ${req.params.name}! Summer is almost here!</h1>`)
})


app.listen(PORT, () => {
  console.log('listenig on PORT:', PORT)
})
