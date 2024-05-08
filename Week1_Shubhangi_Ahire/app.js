const express = require('express');
const { splitString, concatenateStrings,secretHandshake,LeapYear } = require('./logic');

const app = express();
const port = 8000;


// API for splitting a string
app.get('/split/:stringToSplit', (req, res) => {
  const { stringToSplit } = req.params;
  const revisedString = splitString(stringToSplit);
  res.json({ revisedString});
});

// API for concatenating two parameters from the path
app.get('/concatenate/:param1/:param2', (req, res) => {
  const { param1, param2 } = req.params;
  const revisedString = param1 + param2;
  res.json({ revisedString });
});

// API for Leap Year problem
app.get('/leap-year/:year', (req, res) => {
  const year = parseInt(req.params.year);
  const isLeapYear = LeapYear(year);
  res.json({ isLeapYear });
});

 // API for Secret Handshake problem
 app.get('/secret-handshake/:number', (req, res) => {
    const number = parseInt(req.params.number);

    if (isNaN(number) || number < 1 || number > 31) {
        res.status(400).json({ error: "Invalid input. Please provide a number between 1 and 31." });
    } else {
        const result = secretHandshake(number);
        res.json({  result });
    }
});


app.listen(port, () => {
  console.log(`API for splitting a string running on http://localhost:${port}/split/Centrologic_Employee`);
  console.log(`API for concatenating two parameters from the path running on http://localhost:${port}/concatenate/Centrologic/Employee`);
  console.log(`API for Leap Year problem running on http://localhost:${port}/leap-year/2024`);
  console.log(`API for Secret Handshake problem running on http://localhost:${port}/secret-handshake/9`);

});
 