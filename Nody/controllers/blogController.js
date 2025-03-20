const Blog = require('../models/blog');     // Import the Blog model

// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {     //controller for the home page
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        });
}

const blog_details = (req, res) => {   
    const id = req.params.id;

    Blog.findById(id)
        .then((result) => {
            res.render('blogs/details', { blog: result, title: 'Blog Details' });
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Blog not found' });
        });
}    //controller for the details page

const blog_create_get = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}

const blog_create_post = (req, res) => {
        const blog = new Blog(req.body);
    
        blog.save()
            .then((result) => {
                res.redirect('/blogs');
            })
            .catch((err) => {
                console.log(err);
            });
}

const blog_delete = (req, res) => {   //controller for deleting a blog
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/blogs' });
        })
        .catch(err => {
            console.log(err);
        });
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}