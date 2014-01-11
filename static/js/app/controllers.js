'use strict';

/* Controllers */

angular.module('main.controllers', []).
    controller('homepageCtrl', ['$scope', function($scope) {
        $scope.modelHeight = (window.innerHeight *.4 > 320) ? window.innerHeight * .4 : 320;
        $scope.modelWidth = (window.innerWidth *.4 > 320) ? window.innerWidth *.4 : 320;
    }]).
    controller('headerCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.contactPopover = "<p>Phone: ###-###-####</p><p>Email: sales@pressure-perfect.com</p>";
        $scope.contactPopoverTitle = "Contact Information";
    }]).
    controller('productsCtrl', ['$scope', function($scope) {
        $scope.message = "Product Page";
    }]).
    controller('aboutCtrl', ['$scope', function($scope) {
        $scope.message = "About Page";
    }]).
    controller('contactCtrl', ['$scope', function($scope) {
    }]);
