'use strict';

/* Controllers */

angular.module('main.controllers', []).
    controller('homepageCtrl', ['$scope', function($scope) {
        $scope.message = "Home Page";
    }]).
    controller('headerCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.getClass = function(path) {
            if ($location.path().substr(0, path.length) == path) {
                return "active"
            } else {
                return ""
            }
        };
    }]).
    controller('productsCtrl', ['$scope', function($scope) {
        $scope.message = "Product Page";
    }]).
    controller('aboutCtrl', ['$scope', function($scope) {
        $scope.message = "About Page";
    }]).
    controller('contactCtrl', ['$scope', function($scope) {
        $scope.message = "Contact Page";
    }]);
