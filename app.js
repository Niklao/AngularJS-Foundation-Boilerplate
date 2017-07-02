var app = angular.module("starter", ["ui.router",'starter.homeCtrl'])

.config(function($stateProvider , $urlRouterProvider) {
    $stateProvider

    .state('home', {
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl'
    })
        
    .state('aboutus', {
        url: '/aboutus',
        template: 'partial-home-list.html',
        controller: function($scope) {
            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
    })

    $urlRouterProvider.otherwise('/home');
});
app.controller("londonCtrl", function ($scope) {
    $scope.msg = "I love London";
});
app.controller("parisCtrl", function ($scope) {
    $scope.msg = "I love Paris";
});