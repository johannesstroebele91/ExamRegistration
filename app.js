const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const sassMiddleware = require('node-sass-middleware');
const app = express();
const path = require('path');
const port = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: false, // true = .sass and false = .scss
  sourceMap: true
}));

// Load all of necessary external scripts from node_modules into the app
app.use('/scripts', express.static(__dirname + '/node_modules'));
// Load all of the static pages into the file
app.use(express.static(__dirname +'/public/pages',{index: false,extensions:['html']}));
app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, function() {
  console.log("running");
});

module.exports = app;
