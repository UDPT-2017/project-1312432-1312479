var db = require('./db');
var Admin = {
    findAllUser: function(callback){
        db.query("select id, name, email, password from users", [], function(err, result){
            console.log(JSON.stringify(result));
            callback(err, result.rows);
        });
    },
    findAllContact: function(callback){
        db.query("select id, hoten, email, sdt, message from contact", [], function(err, result){
            console.log(JSON.stringify(result));
            callback(err, result.rows);
        });
    },
    insert_user: function(user, callback){
        db.query("insert into users(name, email, password) values($1, $2, $3)",
         [user.name, user.email, user.password], function(err, result){
            callback(err);
        });
    },
    select_id: function(user, callback){
        db.query("select id, name, email, password from users where id = $1", [user.id], function(err, result){
            callback(err, result.rows);
        });
    },
    update_user: function(user, callback){
        db.query("update users set name = $1, email = $2, password = $3 where id = $4",
            [user.name, user.email, user.password, user.id], function(err, result){
            callback(err);
        });
    },
    delete_user: function(user, callback){
        db.query("delete from users where id = $1", [user.id], function(err, result){
            callback(err, result.rows);
        });
    },
    
};
module.exports = Admin;

    


