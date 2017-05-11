const createMed = require('./utils/createMed')

const routes = {};

const namePage = ['main','directions','about','services','vac'];

namePage.forEach((el) => {
    createMed(el,routes);
});

module.exports = routes;
