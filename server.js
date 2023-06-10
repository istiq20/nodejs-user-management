const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./src/routes/user.js');

const app = express();
const port = 8080;

// Template engine setup
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

// Routes
app.use('/', router);

app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
})