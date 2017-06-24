var db = require('./db');

var users = {

    index: function(user, callback) {
        db.query('select id, name, email from users where email = $1 and password = $2', [user.email, user.password],
            function(err, result) {
                callback(err, result.rows);
            });
    },

    // addfriend: function(relations, callback) {
    //     db.query('insert into relations(userid, friendid) values($1, $2)', [relations.userid, relations.friendid],
    //         function(err, result) {
    //             //
    //             db.query('insert into relations(userid, friendid) values($1, $2)', [relations.friendid, relations.userid],
    //                 function(err, result) {
    //                     callback(err, result.rows);
    //                 });
    //         });
    // },

    create: function(user, callback) {
        db.query('insert into users(name, email, password) values($1, $2, $3)', [user.name, user.email, user.password],
            function(err, result) {
                callback(err, result.rows);
            });
    },


    findByEmail: function(user, callback) {
        db.query('select id from users where email = $1', [user.email],
            function(err, result) {
                console.log(result.rows);
                console.log(result.length);
                callback(err, result.rows);
            });
    },
    listfriend: function(user, callback) {
        db.query('select u.email from users u, relations r where r.friendid = u.id and r.usersid = $1', [user.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    listuser: function(user, callback) {
        db.query('select id,email from users where id in (select u.id from users u where u.id != $1 except select r.friendid from relations r where r.usersid = $2)', [user.id, user.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    
    // findAll: function(user, callback) {
    //     db.query('select id, name from users where id != $1', [user.id],
    //         function(err, result) {
    //             callback(err, result.rows);
    //         });
    // },
    // findlistuser: function(user, callback) {
    //     db.query('select id,name from users where id != $1 except select u.id, u.name from users u, relations r where u.id = r.friendid and r.userid = $2 ', [user.userid, user.userid],
    //         function(err, result) {
    //             callback(err, result.rows);
    //         });
    // }
};

module.exports = users;
