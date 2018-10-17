const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials((__dirname + '/views/partials'));
app.set('view engine', 'hbs');

// This is middleware
app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: req - ${req.method}, url - ${req.originalUrl}, hostname - ${req.hostname}, ip - ${req.ip}`;

    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err){
            console.log('Unable to append to the server.log!!');
        }
    });
    next();
})

// app.use((req, res, next) => {
//     res.render('maintanace.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.get('/', (request, response) => {
    //response.send('<h1>Hello express!</h1>');
    response.render('home.hbs', {
        pageTitle: 'Home',
        welcomeMessage: 'Welcome to my website'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About'
    });
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'There has been an error'
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});