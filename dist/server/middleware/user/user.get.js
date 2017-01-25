'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = require('./../../db/models/index');

var _index2 = _interopRequireDefault(_index);

var _winston = require('./../../lib/winston.logger');

var _winston2 = _interopRequireDefault(_winston);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var userModel = _index2.default.userModel;

var UserGet = function () {
    function UserGet() {
        _classCallCheck(this, UserGet);
    }

    _createClass(UserGet, [{
        key: 'getById',
        value: function getById(req, res, next) {
            // If the user ID is undefined pass control to the this.getAll(req, res, next) method
            if (!req.params.id) {
                next();
            } else {
                userModel.findById(req.params.id, function (err, users) {
                    if (err) {
                        _winston2.default.error(err);
                        res.status(404).end();
                    }

                    res.send(users);
                });
            }
        }
    }, {
        key: 'getAll',
        value: function getAll(req, res, next) {
            userModel.find({}, function (err, users) {
                if (err) {
                    _winston2.default.error(err);
                    res.status(404).end();
                }

                res.send(users);
            });
        }
    }]);

    return UserGet;
}();

exports.default = new UserGet();
//# sourceMappingURL=user.get.js.map