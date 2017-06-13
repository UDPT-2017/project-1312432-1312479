var AboutsController = {
  index: function(req, res) {
    res.render('abouts/index', {
        title: ' abouts',
        message: 'abouts',
        layout: 'main'
    });
  }
};

module.exports = AboutsController;
