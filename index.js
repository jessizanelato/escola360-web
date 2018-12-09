const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

express()
  .disable('etag')
  .use(express.static(path.join(__dirname, 'public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function(req, res) {
    res.render('index');
  })
  .get('/login', (req, res) => res.render('login'))
  .listen(3000, () => console.log(`Listening on 3000`));