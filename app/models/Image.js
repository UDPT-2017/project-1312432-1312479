var db = require('./db');
var Image = {
	findAll: function(callback){
		db.query("select id, name, titles, date, url from album", function(err, result){
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},
	findAll1: function(callback){
		db.query("select id, name, url from album1", function(err, result){
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},
	findAll2: function(callback){
		db.query("select id, name, url from album2", function(err, result){
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},
	findAll3: function(callback){
		db.query("select id, name, url from album3", function(err, result){
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},
	search: function(keyword, callback){
		db.query("select id, name, url from album3 where name like $1", ['%'+ keyword + '%'], function(err, result){
			console.log(err);
			console.log(JSON.stringify(result));
			callback(err, result.rows);
		});
	},
}
module.exports = Image;


	


