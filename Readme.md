# Knockout 3 handlebars filter for date formatting

Allow handlebars-style filtering for formatting dates using Moment.js:

    <h1>
      Here is some date: {{ someDate | date: 'MM/dd/YYYY' }}
    </h1>
    <time datetime="{{ someDate | 'YYYY-MM' }}">Here is an attribute</time>

## Dependencies:

- **Knockout 3+** - [http://knockoutjs.com](http://knockoutjs.com)
- **Knockout.Punches** - [http://mbest.github.io/knockout.punches/](http://mbest.github.io/knockout.punches/)
- **Moment.js** - [http://momentjs.com/](http://momentjs.com/)

----

## Usage:

In order to use this filter, you need to include the above libraries via one of these options:

### [requirejs](http://requirejs.org/)

(Names and paths below can be whatever you prefer):

    requirejs.config({
      paths: {
        'knockout': '../lib/knockout/knockout-3.1.0',
        'knockout.date': '../lib/knockout/knockout.punches',
        'knockout.punches': '../lib/knockout/knockout.punches',
        'moment': '../lib/moment/moment',
        ...
      }
    });
    define(['knockout', 'knockout.punches', 'knockout.date'], function (ko, punches, date_filter) {
      ...

### Script tags (uses globals)

    <script src="/scripts/lib/knockout-3.1.0.js"></script>
    <script src="/scripts/lib/knockout.punches.js"></script>
    <script src="/scripts/lib/moment.js"></script>
    <script src="/scripts/lib/date_filter.js"></script>


In either case, you to enable handlebars processing via Knockout.Punches:

    ko.punches.enableAll();
    ko.punches.attributeInterpolationMarkup.enable();


Then in your view, you can display a formatted date in text or attributes 

    {{ yourDate | date: 'dateFormat' }}

Where `yourDate` is a property in your view containing any of the following:

* Date value
* String value _(see [http://momentjs.com/docs/#/parsing/string/](http://momentjs.com/docs/#/parsing/string/))_
* A ko.observable containing a Date or string value. 

`dateFormat` is a string can be anything that moment.js supports: [http://momentjs.com/docs/#/displaying/](http://momentjs.com/docs/#/displaying/)

Note, instead of embedding in filter, it can also be a property in your view model, e.g.:

    {{ yourDate | date: yourFormat }}


## Testing (this repo)

- [Install Grunt](http://gruntjs.com/getting-started#installing-the-cli)
- From this code's directory, run `grunt` or `grunt verify`


