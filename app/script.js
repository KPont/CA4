// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', []);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/test.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/documentation.html',
            controller  : 'contactController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

    // create a message to display in our
    var users = [];
    var person = {firstName:"Lars", userName:"test", age:46};
    var person2 = {firstName:"John", userName:"hej", age:46};
    users.push(person);
    users.push(person2);view
    $scope.message = 'test1';
    $scope.user = users;
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'test2';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'test3';
});