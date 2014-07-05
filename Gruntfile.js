module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                "node" : false,
                "browser" : true,
                "bitwise" : false,
                "devel": false,
                "eqeqeq": false,
                "forin": true,
                "immed": true,
                "latedef": "nofunc",
                "newcap": true,
                "noarg": true,
                "noempty": true,
                "nonew": true,
                "nomen": false,
                "sub": true,
                "trailing": true,
                "undef": true,
                "unused": true,
                "asi": true,
                "globals": {
                    "$": false,
                    "ga": false,
                    "define": false,
                    "jQuery": false,
                    "requirejs": false
                }
            },
            src: [
                'date_filter.js'
            ]
        },
        mochaTest: {
            src: ['test/**/*.spec.js'],
            options: {
                reporter: 'Spec'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('verify', 'Run tests and other source code checks', ['jshint', 'mochaTest']);
    grunt.registerTask('default', ['verify']);
};