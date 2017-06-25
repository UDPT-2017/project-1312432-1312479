var Image = require('../models/Image');
var AlbumsController = {

    index: function(req, res) {
        Image.findAll(function(err, images) {
            if (err) {
                res.redirect('/errors');
            } else {
                res.render('albums/index', {
                    title: ' Albums Ảnh',
                    message: 'albums',
                    layout: 'main',
                    images: images,
                    /*image: selectedImages,
                    isNoResults: selectedImages.length ===0*/
                });
            }

        });
    },
    show1: function(req, res) {
        Image.findAll1(function(err, images) {
            if (err) {
                res.redirect('/errors');
            } else {
                res.render('albums/album1', {
                    title: `Album ${req.params.id}`,
                    message: `Album ${req.params.id}`,
                    layout: 'main',
                    images: images,
                    isNoResults: images.length === 0
                });
            }
        });

    },

    search: function(req, res) {
        var keyword = req.query.keyword;
        Image.search(keyword, function(err, images) {
            if (err) {
                res.redirect('/errors');
            } else {
                res.render('albums/album3', {
                    title: 'Album 1',
                    message: 'Album 1',
                    layout: 'main',
                    images: images,
                    isNoResults: images.length === 0
                });
            }
        });
    },

    show2: function(req, res) {
        Image.findAll2(function(err, images) {
            if (err) {
                res.redirect('/errors');
            } else {
                res.render('albums/album2', {
                    title: ' Album 2',
                    message: 'Album 2',
                    layout: 'main',
                    images: images
                });
            }

        });
    },

};

module.exports = AlbumsController;
