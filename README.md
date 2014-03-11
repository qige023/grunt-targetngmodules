# grunt-targetngmodules

> This Grunt plugin helps make a target app.js for angularjs when you using requirejs with it.

> full inspiration from grunt-targethtml, and share both similar usage.

> specially when you want to use angular-requirejs base project, and looking for a good way both handling html templates(using grunt-html2js) and distribute with requirejs automatically

## Getting Started
This plugin requires Grunt `~0.4.3`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-targetngmodules --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-targetngmodules');
```

## The "targetngmodules" task

### Overview
In your project's Gruntfile, add a section named `targetngmodules` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  targetngmodules: {
    options: {
      // Task-specific options go here. Not support any Option yet :(
    },
    your_target: {
      // Target-specific file lists and/or options go here.
      'src/scripts/app.js': 'build/scripts/app.js'
    },
  },
});
```

### See What Happen
```js
    //in src/scripts/app.js
    define([
    	'angular',

        /*(if target dist)
        'templates/views',
        */
    	'directives',
    	'controllers',
    	], function (angular) {
        		return angular.module('mxphone', [
        			'ngRoute',
        			'services',
                    /*(if target dist)
                     'crazyApp.crazyModules',
                     */
        		]);
        });
```

```js
    //in build/scripts/app.js will look like this
    define([
    	'angular',

        'templates/views',

    	'directives',
    	'controllers',
    	], function (angular) {
        		return angular.module('mxphone', [
        			'ngRoute',
        			'services',

                     'crazyApp.crazyModules',

        		]);
        });
```

### Options
Not Supported yet

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_