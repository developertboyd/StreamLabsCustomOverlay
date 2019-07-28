/**
 * @memberof LIMS
 * @ngdoc module
 * @name app
 */
let donationListener;
let followListener;
let subscriptionListener;
let hostListener;
let bitsListener;

angular.module('app', ['ngResource', 'ngRoute', 'ngAnimate', 'ngCookies', 'ui.router'])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
        $compileProvider.debugInfoEnabled(false);

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'homeCtrl',
                templateUrl: '/partials/home/home'
            });

        $urlRouterProvider.otherwise('/');
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
    })
    .run(function ($rootScope) {
        donationListener = function (callback) {
            $rootScope.$on('donation', callback);
        };

        followListener = function (callback) {
            $rootScope.$on('follow', callback);
        };

        subscriptionListener = function (callback) {
            $rootScope.$on('sub', callback);
        };

        hostListener = function (callback) {
            $rootScope.$on('host', callback);
        };

        bitsListener = function (callback) {
            $rootScope.$on('bits', callback);
        };
    });
