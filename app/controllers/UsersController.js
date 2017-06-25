var users = require('../models/users');
var relations = require('../models/relations');
var blogs = require('../models/blogs');
var UsersController = {

    // index: function(req, res) {
    //     var listfriend;
    //     var listuser;
    //     //danh sahc friendid
    //     relations.findlistfriend({
    //         userid: req.session.userid
    //     }, function(err, result) {
    //         if (!err) {
    //             console.log(result);
    //             listfriend = result;
    //         }
    //     })
    //     //danh sahc user
    //     users.findlistuser({
    //         userid: req.session.userid
    //     }, function(err, result) {
    //         if (!err) {
    //             console.log(result);
    //             listuser = result;
    //             res.render('users/index', {
    //                 listfriend: listfriend,
    //                 listuser: listuser
    //             });
    //         }
    //     });
    //     //render
    //     console.log(listfriend);
    //     console.log(listuser);

    // },
    signup: function(req, res) {
        res.render('users/signup', {
            title: 'Signup',
            layout: 'main'
        });
    },
    getlistuser: function(req, res) {
        users.listuser({
            id: req.session.userid
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                if (result.length > 0) {
                    res.render('users/listuser', {
                        title: 'List user',
                        list: result,
                        status: 1
                    });
                } else {
                    res.render('users/listuser', {
                        title: 'list user',
                        status: 0
                    });
                }
            }
        });
    },
    getlistfriend: function(req, res) {
        users.listfriend({
            id: req.session.userid
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                if (result.length > 0) {
                    res.render('users/listfriend', {
                        title: 'List friend',
                        list: result,
                        status: 1
                    });
                } else {
                    res.render('users/listfriend', {
                        title: 'list friend',
                        status: 0
                    });
                }
            }
        });
    },
    follow: function(req, res) {
        relations.follow({
            userid: req.session.userid,
            friendid: req.body.id
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {

            }
        });
    },
    // addfriend: function(req, res) {
    //     relations.search({
    //         userid: req.session.userid,
    //         friendid: req.body.userid
    //     }, function(err, result) {
    //         if (err) {
    //             //khong thanh cong
    //             res.redirect('/users');
    //         } else {
    //             //thanh cong
    //             if (result.length > 0) {
    //                 //da ton tai
    //                 res.redirect('/users');
    //             } else {
    //                 //chua ton tai
    //                 users.addfriend({
    //                     userid: req.session.userid,
    //                     friendid: req.body.userid
    //                 }, function(err, result) {
    //                     if (err) {
    //                         //that bai
    //                         console.log("4444464");
    //                         res.redirect('/users');
    //                     } else {
    //                         //thanh cong
    //                         console.log("7979797");
    //                         res.redirect('/users');
    //                     }
    //                 });
    //             }
    //         }
    //     });

    // },

    create: function(req, res) {

        users.findByEmail({
                email: req.body.email
            },
            function(err, result) {
                if (err) {
                    //thuc hien that bai
                    res.redirect('/users/signup');
                } else {
                    //kiem tra dang nhap
                    console.log(result);
                    console.log(result.length);
                    if (result.length > 0) {
                        //ton tai user
                        res.redirect('/users/signup');
                    } else {
                        //user chua ton tai
                        //insert user
                        users.create({
                                name: req.body.name,
                                email: req.body.email,
                                password: req.body.password
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


    signin: function(req, res) {
        res.render('users/signin', {
            title: 'Signin',
            layout: 'main'
        });
    },

    index: function(req, res) {
        users.index({
            email: req.body.email,
            password: req.body.password
        }, function(err, result) {
            if (err) {
                res.redirect('/users/signin');
            } else {
                //dang nhap thanh cong
                if (result.length == 1) {
                    req.session.user_email = result[0].email;
                    req.session.userid = result[0].id;
                    res.redirect('/');
                } else {
                    //dang nhap khong thanh cong
                    res.redirect('/users/signin');
                }
            }
        });
    },
    listBlogs: function(req, res) {
        blogs.getBlogByUser({
            id: req.params.id
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                if (result.length > 0) {
                    res.render('blogs/listBlogs', {
                        title: 'Danh sách bài viết',
                        blogs: result,
                        user_email: req.session.user_email,
                        status: 1
                    });
                } else {
                    res.render('blogs/listBlogs', {
                        title: 'Danh sách bài viết',
                        status: 0
                    });
                }
            }
        });
    },
    blogs: function(req, res) {
        blogs.getBlogByUser({
            id: req.session.userid
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                if (result.length > 0) {
                    res.render('blogs/listBlogs', {
                        title: 'Danh sách bài viết',
                        blogs: result,
                        user_email: req.session.user_email,
                        status: 1
                    });
                } else {
                    res.render('blogs/listBlogs', {
                        title: 'Danh sách bài viết',
                        status: 0
                    });
                }
            }
        });
    },
    // search: function(req, res) {
    //     users.search({
    //             email: req.body.email,
    //             password: req.body.password
    //         },
    //         function(err, result) {
    //             if (err) {
    //                 //thuc hien that bai
    //                 res.redirect('/users/login');
    //             } else {
    //                 //kiem tra dang nhap

    //                 if (result.length == 1) {
    //                     //thuc hien thanh cong
    //                     //luu session
    //                     req.session.userid = result[0].id;
    //                     //redirect   trang users
    //                     console.log(req.session);
    //                     res.redirect('/messages');
    //                 } else {
    //                     res.redirect('/users/login');

    //                 }

    //             }
    //         });
    // },

    signout: function(req, res) {
        req.session.destroy();
        res.redirect('/users/signin');
    },
    // listfriend: function(req, res){
    //   relations.findlistfriend({
    //     userid: req.session.userid
    //   }, function(err, result) {
    //     if(!err) {
    //       res.render('users/listfriend',{
    //         list: result
    //       });
    //     }
    //   });
    // },
};

module.exports = UsersController;
