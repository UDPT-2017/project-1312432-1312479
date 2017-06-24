var blogs = require('../models/blogs');
var BlogsController = {
    index: function(req, res) {
        res.render('blogs/index', {
            title: ' Bài Viết',

        });
    },
    create: function(req, res) {
        blogs.create({
            users: req.session.userid,
            title: req.body.title,
            content: req.body.content,
            picture: req.body.picture
        }, function(err, result) {
            if (err) {
                res.redirect('/blogs');
            } else {
                res.redirect('/blogs');
            }
        });
    },
    show: function(req, res) {
        blogs.show({
        	id: req.params.id
        }, function(err, result) {
        	if(err) {
        		res.redirect('/errors');
        	} else {
        		console.log(result);
        		if(result.length == 1) {
        			res.render('blogs/show',{
        				title: 'Bài Viết',
        				blogs: result[0],
        				
        			});
        		} else {
        			res.redirect('/errors');
        		}
        	}
        })
    },
};

module.exports = BlogsController;
