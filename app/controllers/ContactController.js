var Contact = require('../models/Contact');
var ContactController = {
  index: function(req, res) {
    res.render('contact/index', {
        title: ' Liên Hệ',
        message: 'contact',
        layout: 'main',  
    });
  },
  create: function(req, res){
    Contact.create({
      hoten: req.body.hoten,
      email: req.body.email,
      sdt: req.body.sdt,
      message:req.body.message
    }, function(err) {
      if(err) {
         res.redirect('/errors');
      } else {
          res.render('contact/message', {
          title: ' Liên Hệ',
          message: 'contact',
          layout: 'main',
          detailMessages: {
          success: 'Your message is sent. We will contact to you soon.'}  
          });
      }
        
    });
	
  }
};
module.exports = ContactController;
