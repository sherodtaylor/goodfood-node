var ctrl = require('../controllers/goodfood.js');

module.exports = function(app) {
  app.get('/search', ctrl.search);
};
