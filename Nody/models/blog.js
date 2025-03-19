const mongoose = require('mongoose');     //importing mongoose to create a schema

const Schema = mongoose.Schema;   //creating a schema

const blogSchema = new Schema({         //creating a new schema
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });       //timestamps is a property that will automatically create a timestamp for when the blog was created and when it was last updated    

const Blog = mongoose.model('Blog', blogSchema);   //creating a model
module.exports = Blog;      //exporting the model