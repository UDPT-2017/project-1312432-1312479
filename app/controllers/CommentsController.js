var comments = require('../models/comments');

var CommentsControllers = {
    create: function(req, res) {
        comments.create({
            blogs: req.body.blogs,
            users: req.session.userid,
            content: req.body.content
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {

            }
        });
    },
    getlist: function(req, res) {
    	comments.getlist({
    		id: req.params.id
    	}, function(err, result) {
    		if(err) {
    			res.redirect('/errors');
    		} else {
    			res.render('blogs/comment',{
    				title: 'danh sach comment',
    				list: result
    			});
    		}
    	});
    },
}

module.exports = CommentsControllers;
