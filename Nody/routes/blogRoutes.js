const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);   // Use the blog_details controller     
router.delete('/:id', blogController.blog_delete);   // Use the blog_delete controller

module.exports = router;    // Export the router object