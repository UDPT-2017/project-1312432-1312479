var blogs = require('../models/blogs');
var HomeController = {
    index: function(req, res) {
        blogs.getlist({}, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                res.render('home/index', {
                    title: ' Trang Chủ',
                    message: 'My HomePage',
                    list: result
                });
            }
        });

    }
};

module.exports = HomeController;
