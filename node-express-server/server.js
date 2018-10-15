const express = require('express');

var app = express();

app.get('/', (request, response) => {
    //response.send('<h1>Hello express!</h1>');
    response.send({
        name: 'Lenny',
        likes: [
            'Bikes',
            'PS4',
            'Travel'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'There has been an error'
    });
});

app.listen(3000);