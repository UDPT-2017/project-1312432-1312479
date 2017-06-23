var Router = require('express').Router;

var controllers = require('../app/controllers');



module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);
    var aboutsRoutes = Router()
        .get('/', controllers.abouts.index);

    var blogsRoutes = Router()
        .get('/', controllers.blogs.index);

    var loginRoutes = Router()
    	.get('/', controllers.login.index);
    
    var registerRoutes = Router()
        .get('/', controllers.register.index);

    var albumsRoutes = Router()
    	.get('/', controllers.albums.index);
    var adminRoutes = Router()
        .get('/', controllers.admin.index);
        
    var usersRoutes = Router()
        .get('/signout', controllers.users.signout)
        .post('/signin', controllers.users.index)
        .get('/signin', controllers.users.signin)
        .post('/signup', controllers.users.create)
        .get('/signup', controllers.users.signup);

    app.use('/albums/photo', albumsRoutes);
    app.use('/albums', albumsRoutes);
    app.use('/login', loginRoutes);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);
    app.use('/admin', adminRoutes);
    app.use('/users', usersRoutes);
};
