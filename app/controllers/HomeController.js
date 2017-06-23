var HomeController = {
    index: function(req, res) {
    	console.log(req.session);
        res.render('home/index', {
            title: ' Trang Chủ',
            message: 'My HomePage',
            login: '1'
        });
    }
};

module.exports = HomeController;
