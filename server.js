const express = require('express');
const app = express();
const PORT = 3000;

//Greeting
app.get('/greeting/:name', (req, res) => {
  res.send(`<h1>Wut up ${req.params.name}! Summer is almost here!</h1>`)
})
//Tip Calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
  let percentage = req.params.tipPercentage * .01
  let tip = req.params.total * percentage
  res.send(`<h1>Tipping ${req.params.tipPercentage}% on a $${req.params.total} bill, results in a $${tip} tip. Please and thank you.</h1>`)
})
// Magic 8 Ball
app.get('/magic/:question', (req, res) => {
  res.send(`<h1>Your question: ${req.params.question}?</h1><h1>Your answer: ${responseArray()}.</h1>`)
})

//Fibonacci
app.get('/fibonacci/:num', (req, res) => {
  isFibonacci(req.params.num)? res.send(`${req.params.num} is a Fibonacci Number`):
                    res.send(`${req.params.num} is NOT a Fibonacci Number`);
})

//Functions ############################################
//Magic 8 Ball Function
const responseArray = () => {
  let quotes = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
  let response = quotes[Math.floor(Math.random() * quotes.length)];
  return response;
}
//Fibonacci Function ...is num fib set-up?
const isFibonacci = (num) =>
{
    return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
}
//Fibonacci Function ...finding perfect square
const isPerfectSquare = (num) =>
{
    let sRoot = parseInt(Math.sqrt(num));
    return (sRoot * sRoot == num);
}
//###################################################

//listening PORT
app.listen(PORT, () => {
  console.log('listenig on PORT:', PORT)
})
