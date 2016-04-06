var helpers = require('./helpers.js'); // our custom middleware
var gSheet = require('google-spreadsheet');
var serviceAcct = require('../config/LiveRunsheet.json');

var doc = new gSheet('10oFb0oQzQXeKFybHm2P6ozJJ8BDb_bIkvyDM9hBNH3Y');

var getSheet = function (req, res, next) {
  doc.useServiceAccountAuth(serviceAcct, function(data) {
    doc.getInfo(function(err, info) {
      if (err) { console.log('get Sheet error : ', err) };
      info.worksheets[0].getRows({}, function(err, rows) {
        rows = rows.map(row => ({
          'time': row.time,
          'desc': row.desc,
          'who': row.who,
          'notes': row.notes
        }))
        res.status(200).send(rows);
      })
    });
  });
}

module.exports = function (app, express) {

  app.get('/sheet', getSheet);

  app.use(helpers.errorLogger);
  app.use(helpers.errorHandler);
};