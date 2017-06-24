var messages = require('../models/messages');
var relations = require('../models/relations');

var MessagesController = {
    // index: function(req, res) {
    //     messages.getlistreceive({
    //         userid: req.session.userid
    //     }, function(err, result) {
    //         if (!err) {
    //             //console.log(result);
    //             res.render('messages/index', {
    //                 list: result
    //             });
    //         }
    //     });

    // },
    show: function(req, res) {
        messages.show({
            id: req.params.id
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                console.log(result);
                if (result.length == 1) {
                    res.render('messages/show', {
                        title: 'Chi tiết tin nhắn',
                        message: result[0],
                        status: 1
                    });
                } else {
                    res.render('messages/show', {
                        title: 'Chi tiết tin nhắn',
                        status: 0
                    });
                }
            }
        });
    },
    create: function(req, res) {
        relations.getlistfriend({
            id: req.session.userid
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                console.log(result);
                if (result.length > 0) {
                    res.render('messages/create', {
                        title: 'Tạo tin nhắn',
                        status: 1,
                        listfriend: result
                    });
                } else {
                    res.render('messages/create', {
                        title: 'Tạo tin nhắn',
                        status: 0
                    });
                }
            }
        });
    },
    store: function(req, res) {
        messages.store({
            send: req.session.userid,
            receive: req.body.receive,
            title: req.body.title,
            content: req.body.content,
            picture: req.body.picture
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                res.redirect('/messages/create');
            }
        });
    },
    index: function(req, res) {
        messages.send({
            id: req.session.userid
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                if (result.length > 0) {
                    res.render('messages/index', {
                        Title: 'Tin nhắn',
                        list: result,
                        status: 1
                    });
                } else {
                    res.render('messages/index', {
                        Title: 'Tin nhắn',
                        status: 0
                    });
                }
            }
        });
        
    },
    receive: function(req, res) {
        messages.receive({
            id: req.session.userid
        }, function(err, result) {
            if (err) {
                res.redirect('/errors');
            } else {
                if (result.length > 0) {
                    res.render('messages/receive', {
                        title: 'Tin nhắn nhận',
                        list: result,
                        status: 1
                    });
                } else {
                    res.render('messages/receive', {
                        title: 'Tin nhắn nhận',
                        status: 0
                    });
                }
            }
        });
    },
};

module.exports = MessagesController;
