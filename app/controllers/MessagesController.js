var messages = require('../models/messages');
var relations = require('../models/relations');

var MessagesController = {
    index: function(req, res) {
        messages.getlistreceive({
            userid: req.session.userid
        }, function(err, result) {
            if (!err) {
                //console.log(result);
                res.render('messages/index', {
                    list: result
                });
            }
        });

    },
    view: function(req, res) {
        messages.getlistsend({
            userid: req.session.userid
        }, function(err, result) {
            if (!err) {
              res.render('messages/viewmessage', {
                list: result
              });
            }
        });
    },
    create: function(req, res){
      relations.findlistfriend({
          userid: req.session.userid
      }, function(err, result) {
          if (!err) {
            console.log(result);
            res.render('messages/createmessage', {
              list: result
            });
          }
      });

    },
    insert: function(req, res) {
      messages.insert({
        userid: req.session.userid,
        friendid: req.body.friendid,
        chat: req.body.chat
      }, function(err, result){
        if(!err){
          res.redirect('/messages/viewmessage');
        }
      });
    },
};

module.exports = MessagesController;
