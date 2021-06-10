const express = require('express');
const app = express();
const PORT = 3000;

//greeting
app.get('/greeting/:name', (req, res) => {
  res.send(`<h1>Wut up ${req.params.name}! Summer is almost here!</h1>`)
})
//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  let percentage = req.params.tipPercentage * .01
  let tip = req.params.total * percentage
  res.send(`<h1>Tipping ${req.params.tipPercentage}% on a $${req.params.total} bill, results in a $${tip} tip. Please and thank you.</h1>`)
})

//listening PORT
app.listen(PORT, () => {
  console.log('listenig on PORT:', PORT)
})
