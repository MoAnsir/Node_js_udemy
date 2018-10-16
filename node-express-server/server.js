const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials((__dirname + '/views/partials'));
app.set('view engine', 'hbs');
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

app.listen(3000, () => {
    console.log('Server is up');
});