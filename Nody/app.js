const express = require('express');
const morgan = require('morgan');


//express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://Dickson:test123@nodetuts.cynub.mongodb.net/?retryWrites=true&w=majority&appName=nodetuts';

// register view engine
app.set('view engine', 'ejs');

// listen for request
app.listen(3000);


// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum sit amet consectetur'},
    ];
    res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new blog' });
})
 
// 404 page
app.use((req, res) => {

    res.status(404).render('404', { title: '404' });

});









