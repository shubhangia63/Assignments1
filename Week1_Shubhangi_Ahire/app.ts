import express, { Request, Response } from 'express';
import { splitString, concatenateStrings, secretHandshake, LeapYear } from './logic';

const app = express();
const port = 8000;


// API for splitting a string
app.get('/split/:stringToSplit', (req: Request, res: Response) => {
  const { stringToSplit } = req.params;
  const revisedString = splitString(stringToSplit);
  res.json({ revisedString });
});

// API for concatenating two strings
app.get('/concatenate/:param1/:param2', (req: Request, res: Response) => {
  const { param1, param2 } = req.query;
  const revisedString = concatenateStrings(param1 as string, param2 as string);
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

  if ( number <=1 || number >=31) {
      res.status(400).json({ error: "Invalid input. Please provide a number between 1 and 31." });
  } else {
      const result = secretHandshake(number);
      res.json({ handshake: result });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
