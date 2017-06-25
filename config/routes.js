var Router = require('express').Router;

var controllers = require('../app/controllers');



module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var blogsRoutes = Router()
        .get('/:id', controllers.blogs.show)
        .post('/', controllers.blogs.create)
        .get('/', controllers.blogs.index);

    // var loginRoutes = Router()
    //  .get('/', controllers.login.index);

    var registerRoutes = Router()
        .get('/', controllers.register.index);

    var albumsRoutes = Router()
        .get('/', controllers.albums.index)
        .get('/1', controllers.albums.show1)
        .get('/3', controllers.albums.search)
        .get('/2', controllers.albums.show2);
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

    var adminRoutes = Router()
        .get('/', controllers.admin.index)
        .get('/insert', controllers.admin.insert1)
        .post('/insert', controllers.admin.insert_user)
        .get('/update/:id', controllers.admin.select_id)
        .post('/update/:id', controllers.admin.update_user)
        .get('/delete/:id', controllers.admin.delete_user);

    var contactRoutes = Router()
        .get('/', controllers.contact.index)
        .post('/', controllers.contact.create);

    app.use('/albums', albumsRoutes);
    //app.use('/login', loginRoutes);
    app.use('/blogs', blogsRoutes);
    app.use('/', homeRoutes);
    //app.use('/admin', adminRoutes);
    app.use('/users', usersRoutes);
    app.use('/errors', errorsRoutes);
    app.use('/messages', messagesRoutes);
    app.use('/comments', commentsRoutes);
    app.use('/admin', adminRoutes);
    app.use('/contact', contactRoutes);
};
