'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var router = (0, _express.Router)();

	router.use('/api', (0, _api2.default)({ config: config, db: db }));

	(0, _user2.default)(router);

	return router;
};
//# sourceMappingURL=index.js.map