var AlbumsController = {
  index: function(req, res) {
    res.render('albums/index', {
        title: ' albums',
        message: 'albums',
        layout: 'main'
    });
  }
  /*photo: function(req, res) {
    res.render('albums/photo', {
        title: ' photo',
        message: 'photo',
        layout: 'main'
    });
  }*/
};

module.exports = AlbumsController;
