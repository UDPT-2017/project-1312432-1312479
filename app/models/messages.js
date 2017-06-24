var db = require('./db');

var messages = {
    receive: function(user, callback) {
        db.query('select u.email, m.id, m.title from users u, messages m where u.id = m.send and m.receive = $1 order by m.id desc', [user.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    // getlistsend: function(user, callback) {
    //     db.query('select u.name, m.chat from users u, messages m where u.id = m.friendid and m.userid = $1 order by m.id desc', [user.userid],
    //         function(err, result) {
    //             callback(err, result.rows);
    //         });
    // },
    store: function(message, callback) {
        db.query('insert into messages(send, receive, title, content, picture) values($1, $2, $3, $4, $5)', [message.send, message.receive, message.title, message.content, message.picture],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    show: function(message, callback) {
        db.query('select u.email, m.title, m.content, m.picture from users u, messages m where u.id = m.send and m.id = $1 ', [message.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    send: function(user, callback) {
        db.query('select u.email, m.id, m.title from users u, messages m where u.id = m.receive and m.send = $1', [user.id],
            function(err, result) {
                callback(err, result.rows);
            });
    }
}

module.exports = messages;
