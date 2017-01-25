'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _schemas = require('./../schemas');

var _schemas2 = _interopRequireDefault(_schemas);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    userModel: _mongoose2.default.model('User', _schemas2.default.userSchema)
};
//# sourceMappingURL=index.js.map