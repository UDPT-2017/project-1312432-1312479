var HomeController = {
    index: function(req, res) {
        res.render('home/index', {
            title: ' Trang Chủ',
            message: 'My HomePage',
            login: '1'
        });
    }
};

module.exports = HomeController;
