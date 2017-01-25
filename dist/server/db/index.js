'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('./../config.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUrl = function getUrl(config) {
    var url = config.url.replace('<user>', config.user);

    return url.replace('<password>', config.password);
};

exports.default = function (callback) {
    var url = getUrl(_config.dbConfig);
    var db = _mongoose2.default.connect(url);

    callback(db);
};
//# sourceMappingURL=index.js.map