'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var env = process.env.NODE_ENV || 'development';
var logDir = 'log';

var Logger = function () {
    function Logger() {
        _classCallCheck(this, Logger);

        if (!_fs2.default.existsSync(logDir)) {
            _fs2.default.mkdirSync(logDir);
        }

        return new _winston2.default.Logger({
            transports: [
            // colorize the output to the console
            new _winston2.default.transports.Console({
                timestamp: this.tsFormat,
                colorize: true,
                level: 'info'
            }), new (require('winston-daily-rotate-file'))({
                filename: logDir + '/-results.log',
                timestamp: this.tsFormat,
                datePattern: 'yyyy-MM-dd',
                prepend: true,
                level: env === 'development' ? 'verbose' : 'info'
            })]
        });
    }

    _createClass(Logger, [{
        key: 'tsFormat',
        value: function tsFormat() {
            return new Date().toLocaleTimeString();
        }
    }]);

    return Logger;
}();

// logger.info(' ');
// logger.debug('Debugging info');
// logger.verbose('Verbose info');
// logger.warn('Warning message');
// logger.error('Error info');

exports.default = new Logger();
//# sourceMappingURL=winston.logger.js.map