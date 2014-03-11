define([
	'angular',
	'filters/module',
	'services/module',
    /*(if target dist)
    'templates/module',
    */
	'directives/module',
	'controllers/module',
    'components/module',
    'i18n/module',
    'utils/module',
    'animations',

	'angularRoute',
    'angularCookies',
    'angularSanitize',
//    'angularTouch',
    'angularAnimate',
    'angularTranslate',
    'angularGestures',
    'angularElastic'
	], function (angular) {
		'use strict';
		// 声明应用
		return angular.module('mxphone', [
            //系统默认服务
			'ngRoute',
            'ngCookies',
            'ngSanitize',
            'ngAnimate',
//            'ngTouch',
            'pascalprecht.translate',
            'angular-gestures',
            'monospaced.elastic',
            //自定义注入
			'mxphone.controllers',
			'mxphone.filters',
			'mxphone.services',
            /*(if target dist)
             'mxphone.crayModules',
             */
			'mxphone.directives',
            'mxphone.animations',
            'mxphone.components',
            'mxphone.language',
            'mxphone.utils'
		]);
});
