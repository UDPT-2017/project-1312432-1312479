var users = require('../models/users');
var relations = require('../models/relations');

var UsersController = {

    index: function(req, res) {
        var listfriend;
        var listuser;
        //danh sahc friendid
        relations.findlistfriend({
            userid: req.session.userid
        }, function(err, result) {
            if (!err) {
                console.log(result);
                listfriend = result;
            }
        })
        //danh sahc user
        users.findlistuser({
            userid: req.session.userid
        }, function(err, result) {
            if (!err) {
                console.log(result);
                listuser = result;
                res.render('users/index', {
                    listfriend: listfriend,
                    listuser: listuser
                });
            }
        });
        //render
        console.log(listfriend);
        console.log(listuser);

    },
    signup: function(req, res) {
        res.render('users/register', {
            layout: 'application'
        });
    },

    addfriend: function(req, res) {
        relations.search({
            userid: req.session.userid,
            friendid: req.body.userid
        }, function(err, result) {
            if (err) {
                //khong thanh cong
                res.redirect('/users');
            } else {
                //thanh cong
                if (result.length > 0) {
                    //da ton tai
                    res.redirect('/users');
                } else {
                    //chua ton tai
                    users.addfriend({
                        userid: req.session.userid,
                        friendid: req.body.userid
                    }, function(err, result) {
                        if (err) {
                            //that bai
                            console.log("4444464");
                            res.redirect('/users');
                        } else {
                            //thanh cong
                            console.log("7979797");
                            res.redirect('/users');
                        }
                    });
                }
            }
        });

    },

    register: function(req, res) {
        users.findByEmail({
                email: req.body.email
            },
            function(err, result) {
                if (err) {
                    //thuc hien that bai
                    res.redirect('/users/register');
                } else {
                    //kiem tra dang nhap
                    console.log(req.body.email);
                    console.log(result.length);
                    if (result.length > 0) {
                        //ton tai user
                        res.redirect('/users/register');
                    } else {
                        //user chua ton tai
                        //insert user
                        users.register({
                                email: req.body.email,
                                password: req.body.password,
                                name: req.body.name,
                                phone: req.body.phone
                            },
                            function(err, result) {
                                if (err) {
                                    //that bai
                                    res.redirect('/users/register');
                                } else {
                                    //thanh cong
                                    res.redirect('/users/login');
                                }
                            });
                    }
                }
            });
    },

    login: function(req, res) {
        res.render('users/login', {
            title: 'users',
            message: 'users',
            layout: 'application'
        });
    },

    search: function(req, res) {
        users.search({
                email: req.body.email,
                password: req.body.password
            },
            function(err, result) {
                if (err) {
                    //thuc hien that bai
                    res.redirect('/users/login');
                } else {
                    //kiem tra dang nhap

                    if (result.length == 1) {
                        //thuc hien thanh cong
                        //luu session
                        req.session.userid = result[0].id;
                        //redirect   trang users
                        console.log(req.session);
                        res.redirect('/messages');
                    } else {
                        res.redirect('/users/login');

                    }

                }
            });
    },

    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/users/login');
    },
    listfriend: function(req, res){
      relations.findlistfriend({
        userid: req.session.userid
      }, function(err, result) {
        if(!err) {
          res.render('users/listfriend',{
            list: result
          });
        }
      });
    },
};

module.exports = UsersController;
