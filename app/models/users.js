var db = require('./db');

var users = {
    search: function(user, callback) {
        db.query('select id, name, phone from users where email = $1 and password = $2', [user.email, user.password],
            function(err, result) {
                callback(err, result.rows);
            });
    },

    addfriend: function(relations, callback) {
        db.query('insert into relations(userid, friendid) values($1, $2)', [relations.userid, relations.friendid],
            function(err, result) {
                //
                db.query('insert into relations(userid, friendid) values($1, $2)', [relations.friendid, relations.userid],
                    function(err, result) {
                        callback(err, result.rows);
                    });
            });
    },

    register: function(user, callback) {
        db.query('insert into users(email, password, name, phone) values($1, $2, $3, $4)', [user.email, user.password, user.name, user.phone],
            function(err, result) {
                callback(err, result.rows);
            });
    },

    findByEmail: function(user, callback) {
        db.query('select id, name, phone from users where email = $1', [user.email],
            function(err, result) {
                callback(err, result.rows);
            });
    },

    findAll: function(user, callback) {
        db.query('select id, name from users where id != $1', [user.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    findlistuser: function(user, callback) {
        db.query('select id,name from users where id != $1 except select u.id, u.name from users u, relations r where u.id = r.friendid and r.userid = $2 ', [user.userid, user.userid],
            function(err, result) {
                callback(err, result.rows);
            });
    }
};

module.exports = users;
