const page = require('page');
const routes = require('./routes');
const callback = require('../utils/main');

page('/',routes.main,callback.main);
page('/directions',routes.directions,callback.directions)
page('/about',routes.about,callback.about)
page('/services',routes.services,callback.services)
page('/vac',routes.vac,callback.vac)

page();
