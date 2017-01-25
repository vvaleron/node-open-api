'use strict';

define(function (require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');

    module.exports = Backbone.View.extend({
        initialize: function initialize() {
            console.log(arguments, this);
        }
    });
});
//# sourceMappingURL=base.view.js.map