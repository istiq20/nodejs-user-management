const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 8080;

// Template engine setup
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

// Routes
app.use('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
})