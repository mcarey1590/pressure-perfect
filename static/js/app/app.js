'use strict';

// Declare app level module which depends on filters, and services
angular.module('main', [
        'ngRoute',
        'ngAnimate',
        'main.controllers'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homepageCtrl'})
        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
});