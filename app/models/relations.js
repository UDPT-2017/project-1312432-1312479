var db = require('./db');

var relations = {
    search: function(relations, callback) {
        db.query('select id from relations where userid = $1 and friendid = $2', [relations.userid, relations.friendid],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    findlistfriend: function(relations, callback) {
        db.query('select u.id,u.name from users u, relations r where u.id = r.friendid and r.userid = $1', [relations.userid],
            function(err, result) {
                callback(err, result.rows);
            });
    }
}

module.exports = relations;
