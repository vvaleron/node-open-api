'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mongoose = require('mongoose');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // grab the things we need


var UserSchema = function (_Schema) {
    _inherits(UserSchema, _Schema);

    function UserSchema() {
        _classCallCheck(this, UserSchema);

        var _this = _possibleConstructorReturn(this, (UserSchema.__proto__ || Object.getPrototypeOf(UserSchema)).call(this, {
            name: String,
            username: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            admin: Boolean,
            location: String,
            meta: {
                age: Number,
                website: String
            },
            created_at: Date,
            updated_at: Date
        }));

        Object.assign(_this.methods, {
            say: _this.say
        });
        return _this;
    }

    _createClass(UserSchema, [{
        key: 'say',
        value: function say(prop) {
            return this[prop];
        }
    }]);

    return UserSchema;
}(_mongoose.Schema);

exports.default = UserSchema;
//# sourceMappingURL=user.schema.js.map