var RegisterController = {
  index: function(req, res) {
    res.render('register/index', {
        title: ' register',
        message: 'register',
        layout: 'main'
    });

  }
}
 

module.exports = RegisterController;
