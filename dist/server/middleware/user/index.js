'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (router) {
    router.get('/user', _user2.default.getAll);
    router.get('/user/:id', _user2.default.getById);
    return router;
};

var _user = require('./user.get');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
//# sourceMappingURL=index.js.map