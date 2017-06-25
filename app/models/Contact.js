var db = require('./db');
var Contact = {
	create: function(contact, callback){
		db.query("insert into contact(hoten, email, sdt, message) values($1, $2, $3, $4)",
		 [contact.hoten, contact.email, contact.sdt, contact.message], function(err, result){
			callback(err);
		});
}
}
module.exports = Contact;


	


