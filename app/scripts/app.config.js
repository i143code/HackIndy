angular
  .module('finalIndyHackthApp').config(function($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "/views/main.html"
        })

    .state('register', {
        url: "/register",
        templateUrl: "/views/register.html",
       controller:'RegisterCtrl'
    });
});