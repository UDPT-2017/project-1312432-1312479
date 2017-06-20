var BlogsController = {
  index: function(req, res) {
    res.render('blogs/index', {
        title: ' blogs',
        message: 'blogs',
        layout: 'main'
    });
  }
};

module.exports = BlogsController;
