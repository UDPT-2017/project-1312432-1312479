
module.exports = {
  home: require('./HomeController'),
  abouts: require('./AboutsController'),
  blogs: require('./BlogsController'),
  login: require('./LoginController'),
  register: require('./RegisterController'),
  albums: require('./AlbumsController'),
  admin: require('./admin/DashboardController'),
  users: require('./UsersController'),
  errors: require('./ErrorsController'),
  messages: require('./MessagesController')
};
