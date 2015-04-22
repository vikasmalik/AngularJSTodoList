﻿

var app = angular.module('AngularJSTodoListListApp', ['ngRoute']);

// using of constant service; the author suppose to not change, be constant :)
// this can be used just like value service + in app.config
app.constant('author', 'Ovi-Wan Kenobi');

// using the value service; the version would eventually change, therefor not a constant.
// value service can not be used in app.config as the constant service can
app.value('version', '1.0');


//This code configures the app routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/users',
            {
                templateUrl: 'app/partials/users.html',
                controller: 'userController'
            })
        //Define a route that has a route parameter in it (:userId)
        .when('/userTodos/:userId',
            {
                templateUrl: 'app/partials/userTodos.html',
                controller: 'userController'
            })
        .when('/Todos',
            {
                templateUrl: 'app/partials/allUsersTodos.html',
                controller: 'userController'
            })
        .otherwise({ redirectTo: '/users' });
});




