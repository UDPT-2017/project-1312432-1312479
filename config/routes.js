var Router = require('express').Router;


var controllers = require('../app/controllers');



module.exports = function(app) {
    var homeRoutes = Router()
        .get('/', controllers.home.index);

    var usersRoutes = Router()
        .get('/', controllers.users.index)
        .get('/login', controllers.users.login)
        .post('/login', controllers.users.search)
        .post('/register', controllers.users.register)
        .get('/logout', controllers.users.logout)
        .post('/', controllers.users.addfriend)
        .get('/listfriend', controllers.users.listfriend)
        .get('/register', controllers.users.signup);
    var messagesRoutes = Router()
        .get('/', controllers.messages.index)
        .get('/createmessage', controllers.messages.create)
        .post('/createmessage', controllers.messages.insert)
        .get('/viewmessage', controllers.messages.view);
    var aboutsRoutes = Router()
        .get('/', controllers.abouts.index);
    app.use('/', homeRoutes);
    app.use('/users', usersRoutes);
    app.use('/messages', messagesRoutes);
    app.use('/abouts', aboutsRoutes);

};
