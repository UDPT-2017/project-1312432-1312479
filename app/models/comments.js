var db = require('./db');

var comments = {
    create: function(comment, callback) {
        db.query('insert into comments(blogs, users, content) values($1, $2, $3)', [comment.blogs, comment.users, comment.content],
            function(err, result) {
                callback(err, result.rows);
            });
    },
    getlist: function(blogs, callback) {
        db.query('select u.email, c.id, c.content from users u, comments c where c.users = u.id and c.blogs = $1', [blogs.id],
            function(err, result) {
                callback(err, result.rows);
            });
    },
}

module.exports = comments;
