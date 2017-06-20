var Router = require('express').Router;

var controllers = require('../app/controllers');



module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);
    var aboutsRoutes = Router()
        .get('/', controllers.abouts.index);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);

    var blogsRoutes = Router()
        .get('/', controllers.blogs.index);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);

    var loginRoutes = Router()
    	.get('/', controllers.login.index);
    app.use('/login', loginRoutes);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);

    var registerRoutes = Router()
        .get('/', controllers.register.index);
    app.use('/register', registerRoutes);
    app.use('/login', loginRoutes);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);

    var albumsRoutes = Router()
    	.get('/', controllers.albums.index);
        
    app.use('/albums/photo', albumsRoutes);
    app.use('/albums', albumsRoutes);
    app.use('/login', loginRoutes);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);
};
