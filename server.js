const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `/views/${name}`));
  };
  next();
});

app.use(['/settings', '/user'], (req, res) => {
  res.show('forbidden.html');
});

app.use(express.static(path.join(__dirname, '/public')));

app.get(['/', '/home'], (req, res) => {
  res.show('index.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.get('/contact', (req, res) => {
  res.show('contact.html');
});

app.get('/info', (req, res) => {
  res.show('info.html');
});

app.get('/history', (req, res) => {
  res.show('history.html');
});

app.get('/hello/:name', (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>`);
});

app.use((req, res) => {
  res.status(404).show('error404.html');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
