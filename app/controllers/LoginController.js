var LoginController = {
  index: function(req, res) {
    res.render('login/index', {
        title: ' login',
        message: 'login',
        layout: 'main'
    });

  }
}
 

module.exports = LoginController;
