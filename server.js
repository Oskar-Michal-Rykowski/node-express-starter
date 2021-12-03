const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
app.engine('hbs', hbs());
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(['/settings', '/user'], (req, res) => {
  res.render('forbidden');
});

app.use(express.urlencoded({ extended: false }));

app.get(['/', '/home'], (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about', { layout: 'dark' });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/history', (req, res) => {
  res.render('history');
});

app.get('/hello/:name', (req, res) => {
  res.render('hello', { layout: false, name: req.params.name });
});

app.post('/contact/send-message', (req, res) => {
  res.json(req.body);
});

app.use((req, res) => {
  res.status(404).render('error404');
});

app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});
