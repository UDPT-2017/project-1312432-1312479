var db = require('./db');

var relations = {
    search: function(relations, callback) {
        db.query('select id from relations where userid = $1 and friendid = $2', [relations.userid, relations.friendid],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    getlistfriend: function(relations, callback) {
        db.query('select u.id,u.email from users u, relations r where u.id = r.friendid and r.usersid = $1', [relations.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    follow: function(relations, callback) {
        db.query('insert into relations(usersid, friendid) values($1, $2)', [relations.userid, relations.friendid],
            function(err, result) {
                callback(err, result.rows);
            });
    }
}

module.exports = relations;
