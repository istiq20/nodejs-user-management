const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./src/routes/user.js');

const app = express();
const port = 8080;

// Template engine setup
app.engine('hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.json({ limit:"5mb" }));
app.use(express.urlencoded({ limit:"5mb", extended: true }));

// Routes
app.use('/', router);

app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
})