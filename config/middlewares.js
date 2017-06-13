var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var router = express.Router()



module.exports = function(app) {
    app.use(session({
        secret: 'secret'
    }));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(express.static('public'));
    app.use('/components', express.static('bower_components'));

    app.use(function(req, res, next) {
        //neu la login ->render

        if (req.originalUrl == '/users/login' || req.method != 'GET' || req.originalUrl == '/users/register') {
            console.log(req.originalUrl + "1" + req.method);
            next()
        } else {
            console.log(req.originalUrl + "2" + req.method);
            //truong hop khac
            var username = req.session.userid;
            console.log(req.session);

            if (username == undefined) {
                res.redirect('/users/login');
            } else {
                next()
            }
            //neu chua co session -> redirect users/login

        }

    });
};
