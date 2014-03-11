/*
 * grunt-targetngmodules
 * https://github.com/qige023/grunt-targetngmodules
 *
 * Copyright (c) 2014 Qige023
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },

            gruntfile: 'Gruntfile.js',
            tasks: 'tasks/*.js',
            tests: '<%= nodeunit.tasks %>'
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            test: ['tmp']
        },

        // Configuration to be run (and then tested).
        targetngmodules: {
            dist: {
                options: {
                    curlyTags: {
                        cssver: '001',
                        jsver: '002'
                    }
                },
                files: {
                    'tmp/app.js': 'test/fixtures/app.js'
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tasks: ['test/*_test.js']
        }
    });

    // Load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'targetngmodules']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};
