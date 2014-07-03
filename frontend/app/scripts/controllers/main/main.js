'use strict';

/**
 * @ngdoc function
 * @name seedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seedApp
 */
angular.module("app-name",['ngRoute','content-mocks','security.authorization','http-auth-interceptor','entrancebook.directives'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/admin',
            {templateUrl: '../views/dashboard.html', controller: 'MainCtrl'
            }
        )
    }])
    .controller('MainCtrl', function ($scope,$modal) {

    })
