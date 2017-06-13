var db = require('./db');

var messages = {
    getlistreceive: function(user, callback) {
        db.query('select u.name, m.chat from users u, messages m where u.id = m.userid and m.friendid = $1 order by m.id desc', [user.userid],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    getlistsend: function(user, callback) {
        db.query('select u.name, m.chat from users u, messages m where u.id = m.friendid and m.userid = $1 order by m.id desc', [user.userid],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    insert: function(message, callback) {
        db.query('insert into messages(userid, friendid, chat) values($1, $2, $3)', [message.userid, message.friendid, message.chat],
            function(err, result) {
                callback(err, result.rows);
            });
    }
}

module.exports = messages;
