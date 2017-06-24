var ErrorsController = {
	index: function(req, res) {
		res.render('error/index',{
			title: 'Error'
		});
	},
}

module.exports = ErrorsController;