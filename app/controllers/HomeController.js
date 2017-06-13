var HomeController = {
    index: function(req, res) {
        res.render('home/index', {
            title: ' Hey HomePage',
            message: 'My HomePage',
            login: '1'
        });
    }
};

module.exports = HomeController;
