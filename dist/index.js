'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = require('./server/db');

var _db2 = _interopRequireDefault(_db);

var _middleware = require('./server/middleware');

var _middleware2 = _interopRequireDefault(_middleware);

var _config = require('./server/config.json');

var _config2 = _interopRequireDefault(_config);

var _winston = require('./server/lib/winston.logger');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);
// 3rd party middleware
app.use((0, _cors2.default)({
  exposedHeaders: _config2.default.corsHeaders
}));

app.use(_bodyParser2.default.json({
  limit: _config2.default.bodyLimit
}));

app.use(_express2.default.static('src/client'));

// connect to db
(0, _db2.default)(function (db) {

  // internal middleware
  app.use((0, _middleware2.default)({ config: _config2.default, db: db }));

  app.server.listen(process.env.PORT || _config2.default.port);
  var startedInfo = 'Started on port ' + app.server.address().port;

  _winston2.default.info(' ');
  _winston2.default.info('---------------------------');
  _winston2.default.info(startedInfo);
  _winston2.default.info('---------------------------');
  _winston2.default.info(' ');
});

exports.default = app;
//# sourceMappingURL=index.js.map