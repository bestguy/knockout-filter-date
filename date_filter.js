/* globals exports, require */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'knockout', 'moment'], function (exports, ko, moment) {
            factory((root.commonJsStrictGlobal = exports), ko, moment);
        });
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(exports, require('knockout'), require('moment'));
    } else {
        // Browser globals
        factory((root.commonJsStrictGlobal = {}), root.ko, root.moment);
    }
}(this, function (exports, ko, moment) {
    ko.filters.date = function (date, format) {
        return moment(ko.unwrap(date)).format(ko.unwrap(format));
    };
}));