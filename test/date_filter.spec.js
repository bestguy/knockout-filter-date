/**
 * Created by bestguy on 7/4/14.
 */
var assert = require('assert');
var ko = require('knockout');

require('knockout.punches');
require('../date_filter');


describe('date_filter', function(){
    describe('"date" filter', function(){
        var dateString = '2014-01-02T12:34Z';
        var formatString = 'MM/DD/YYYY';

        it('should have a date filter defined', function(){
            assert(ko.filters.date);
            assert.equal(typeof ko.filters.date, 'function');
        });

        it('should correctly format a Date and string', function(){
            var date = new Date(dateString);
            assert.equal(ko.filters.date(date, formatString), '01/02/2014');
        });
        it('should correctly format two strings', function(){
            assert.equal(ko.filters.date(dateString, formatString), '01/02/2014');
        });
        it('should correctly format two observables', function(){
            assert.equal(ko.filters.date(ko.observable(dateString), ko.observable(formatString)), '01/02/2014');
        });
    });
});
