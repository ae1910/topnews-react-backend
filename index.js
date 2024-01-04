import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

app.use(cors({
  origin: ["https://topnews-s6va.onrender.com/"]
}));
app.use(express.json());

import dotenv from 'dotenv'
dotenv.config({});

const apiKey = process.env.API_KEY;

app.get('/latest', async (req, res) => {
  try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      const response = await fetch(url);
      const json = await response.json();
      res.json(json);
  } catch {
      console.log(err)
  }
});

app.get('/category/:category', async (req, res) => {
  const category = req.params.category;

  try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const json = await response.json();
      res.json(json);
  } catch {
      console.log(err)
  }
});

app.get('/results/:query/:sort', async (req, res) => {
  const query = req.params.query;
  const sort = req.params.sort;

  try {
      const url = `https://newsapi.org/v2/everything?q=${query}&sortBy=${sort}&apiKey=${apiKey}`;
      const response = await fetch(url);
      const json = await response.json();
      res.json(json);
  } catch {
      console.log(err)
  }
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});