const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');      // Import the blogRoutes module


//express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://Dickson:test123@nodetuts.cynub.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuts';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000)) 
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));



// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);    // Use the blogRoutes module    
 
// 404 page
app.use((req, res) => {

    res.status(404).render('404', { title: '404' });

});









