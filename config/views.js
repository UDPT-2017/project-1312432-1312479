var exphbs = require('express-handlebars');
var path = require('path');

module.exports = function(app) {
    app.engine('hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'main',
        layoutsDir: path.resolve('./app/views/layouts')
    }));

    app.set('view engine', 'hbs');
    app.set('views', path.resolve('./app/views'));
};
