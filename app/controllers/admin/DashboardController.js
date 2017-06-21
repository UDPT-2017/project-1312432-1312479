var DashbordController = {
  index: function(req, res) {
    res.render('admin/index', {
        title: ' Admin',
        message: 'admin',
        layout: 'main'
    });
  }
};

module.exports = DashbordController;
