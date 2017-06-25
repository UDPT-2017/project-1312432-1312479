var db = require('./db');

var blogs = {
    create: function(blogs, callback) {
        db.query('insert into blogs(users, title, content, picture) values($1, $2, $3, $4)', [blogs.users, blogs.title, blogs.content, blogs.picture],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    show: function(blogs, callback) {
        db.query('select id, users, title, content, picture from blogs where id = $1', [blogs.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    getBlogByUser: function(user, callback) {
        db.query('select id, title, content, picture from blogs where users = $1', [user.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    getlist: function(blogs, callback) {
        db.query('select u.email, b.id, b.title from users u, blogs b where b.users = u.id',
            function(err, result) {
                callback(err, result.rows);
            });
    },
}

module.exports = blogs;
