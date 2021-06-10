const express = require('express');
const app = express();
const PORT = 3000;
const fs = require('fs');

// Mount routes
app.get('/', (req, res) => {
  res.send(`<h1>99 bottles of beer on the wall,</h1>
            <h1>99 bottles of beer,</h1>
            <a href="/98">take one down, pass it around...</a>`)
})

app.get('/:bottlesOfBeer', (req, res) =>{
  const currentBeerBottle = parseInt(req.params.bottlesOfBeer);
  const nextBeerBottle = parseInt(req.params.bottlesOfBeer) - 1;

  if(currentBeerBottle === 0){
    res.send(`<h1>0 bottles of beer on the wall...you must be drunk.</h1>
              <a href="/99">Drink again?</a>`)
  } else {
  res.send(`<h1>${currentBeerBottle} bottles of beer on the wall,</h1>
            <h1>${currentBeerBottle} bottles of beer,</h1>
            <a href="/${nextBeerBottle}">take one down, pass it around...</a>`);
  }
})

// Tell the app to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT} inside pass-it-around`)
})
