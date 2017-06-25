var Admin = require('../../models/Admin');
var DashbordController = {
  index: function(req, res) {
    Admin.findAllUser(function(err, lists){ 
      Admin.findAllContact(function(err, lists_contact){ 
        res.render('admin/index', {
            title: ' Admin',
            message: 'admin',
            layout: 'main',
            lists: lists,
            lists_contact: lists_contact,
        });
    });
  });
  },
  
  insert1: function(req, res) {
    
    res.render('admin/insert', {
        title: ' Admin',
        message: 'admin',
        layout: 'main',
    });
  },

  insert_user: function(req, res) {
     Admin.insert_user({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }, function(err) {
      if(err) {
          res.render('admin/insert', {
            title: ' Insert User',
            message: 'insert user',
            layout: 'main', 
            detailMessages: { err:'Data Error'}  
          }); 
      } else {
        Admin.findAllUser(function(err, lists){ 
        Admin.findAllContact(function(err, lists_contact){ 
          res.render('admin/index', {
              title: ' Admin',
              message: 'admin',
              layout: 'main',
              lists: lists,
              lists_contact: lists_contact,
          });
      });
    });
      } 
    });
  },
  select_id: function(req, res) {
    Admin.select_id({
      id: req.params.id
      }, function(err, result) {
        console.log(result);  
              res.render('admin/update', {
              title: ' Admin',
              message: 'admin',
            layout: 'main',
            user: result[0]
              });
    });
  },
  update_user: function(req, res) {
     Admin.update_user({
      id: req.params.id,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }, function(err) {
      if(err) {

          res.render('admin/update/:id', {
            title: ' Update User',
            message: 'Update User',
            layout: 'main', 
            detailMessages: { err:'Data Error'}  
          }); 
      } else {
        Admin.findAllUser(function(err, lists){ 
        Admin.findAllContact(function(err, lists_contact){ 
          res.render('admin/index', {
              title: ' Admin',
              message: 'admin',
              layout: 'main',
              lists: lists,
              lists_contact: lists_contact,
          });
      });
    });
      } 
    });
  },

  delete_user: function(req, res) {
    Admin.delete_user({
      id: req.params.id
    }, function(err) {
      if(err) {
          res.render('admin/delete/:id', {
            title: ' delete User',
            message: 'delete user',
            layout: 'main', 
            detailMessages: { err:'Data Error'}  
          }); 
      } else {
        Admin.findAllUser(function(err, lists){ 
        Admin.findAllContact(function(err, lists_contact){ 
          res.render('admin/index', {
              title: ' Admin',
              message: 'admin',
              layout: 'main',
              lists: lists,
              lists_contact: lists_contact,
          });
      });
    });
      } 
    });
  },
  
};

module.exports = DashbordController;
