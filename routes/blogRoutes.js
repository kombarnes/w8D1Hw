const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();


//blog routes

router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

router.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog 2',
        snippet: 'About new blog',
        body: 'More about this new blog',
    });
    blog.save()
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

router.get('/all-blogs', () => {
    Blog.find()
    .then((result) =>{
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

router.get('/single-blog', (req, res) => {
    Blog.findById("621979f46a66c4b5601b770e")
    .then((result) => {
        res.send(result)
    })
    .catch((err) => {
        console.log(err)
    })
});

module.exports = router;