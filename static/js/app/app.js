'use strict';

// Declare app level module which depends on filters, and services
angular.module('main', [
        'ngRoute',
        'ngAnimate',
        'main.controllers'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'homepageCtrl'})
        $routeProvider.when('/products', {templateUrl: 'partials/products.html', controller: 'productsCtrl'})
        $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutCtrl'})
        $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactCtrl'})
        .otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(true);
});