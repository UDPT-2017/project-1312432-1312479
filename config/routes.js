var Router = require('express').Router;

var controllers = require('../app/controllers');



module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);
    var aboutsRoutes = Router()
        .get('/', controllers.abouts.index);

    var blogsRoutes = Router()
        .get('/:id', controllers.blogs.show)
        .post('/', controllers.blogs.create)
        .get('/', controllers.blogs.index);

    // var loginRoutes = Router()
    //  .get('/', controllers.login.index);

    var registerRoutes = Router()
        .get('/', controllers.register.index);

    var albumsRoutes = Router()
        .get('/', controllers.albums.index);
    // var adminRoutes = Router()
    //     .get('/', controllers.admin.index);

    var usersRoutes = Router()
        .get('/blogs', controllers.users.blogs)
        .post('/follow', controllers.users.follow)
        .get('/listuser', controllers.users.getlistuser)
        .get('/listfriend', controllers.users.getlistfriend)
        .get('/listblog/:id', controllers.users.listBlogs)
        .get('/signout', controllers.users.signout)
        .post('/signin', controllers.users.index)
        .get('/signin', controllers.users.signin)
        .post('/signup', controllers.users.create)
        .get('/signup', controllers.users.signup);

    var errorsRoutes = Router()
        .get('/', controllers.errors.index);

    var messagesRoutes = Router()
        .get('/detail/:id', controllers.messages.show)
        .get('/receive', controllers.messages.receive)
        .post('/create', controllers.messages.store)
        .get('/create', controllers.messages.create)
        .get('/', controllers.messages.index);

    var commentsRoutes = Router()
        .get('/list/:id', controllers.comments.getlist)
        .post('/create', controllers.comments.create);

    app.use('/albums/photo', albumsRoutes);
    app.use('/albums', albumsRoutes);
    //app.use('/login', loginRoutes);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    app.use('/abouts', aboutsRoutes);
    //app.use('/admin', adminRoutes);
    app.use('/users', usersRoutes);
    app.use('/errors', errorsRoutes);
    app.use('/messages', messagesRoutes);
    app.use('/comments', commentsRoutes);
};
