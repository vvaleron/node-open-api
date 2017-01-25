'use strict';

define(function (require, exports, module) {
    'use strict';

    var $ = require('jquery');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var UsersView = require('views/users/users.view');

    module.exports = Backbone.Router.extend({
        defaults: {
            pageClass: 'page-container'
        },
        routes: {
            "": "home",
            "home": "home",
            "users": "users",
            "logs": "logs",
            "sessionTokens": "sessionTokens"
        },

        showByHash: function showByHash() {
            var route = location.hash.replace('#', '');
            this[route].apply(this, arguments);
        },

        users: function users() {
            this.userView = new UsersView();

            this.hidePages();
            this.userView.render();
        },

        hidePages: function hidePages() {
            $('.' + this.defaults.pageClass).css('display', 'none');
        },

        home: function home(options) {
            console.log(_, $, this, arguments);
            debugger;
        },
        logs: function logs(options) {},
        sessionTokens: function sessionTokens() {}

    });
});
//# sourceMappingURL=router.js.map