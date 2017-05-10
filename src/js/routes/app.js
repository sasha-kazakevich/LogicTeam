const page = require('page');
const routes = require('./routes');
const callback = require('../utils/main');

page('/',routes.main,callback.main);

page();
