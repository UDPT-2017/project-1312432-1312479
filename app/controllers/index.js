
module.exports = {
  home: require('./HomeController'),
  blogs: require('./BlogsController'),
  login: require('./LoginController'),
  register: require('./RegisterController'),
  albums: require('./AlbumsController'),
  admin: require('./admin/DashboardController'),
  users: require('./UsersController'),
  errors: require('./ErrorsController'),
  contact: require('./ContactController'),
  messages: require('./MessagesController'),
  comments: require('./CommentsController')
};
