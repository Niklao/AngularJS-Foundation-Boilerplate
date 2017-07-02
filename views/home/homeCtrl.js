angular.module('starter.homeCtrl', ['ui.router'])

.controller('HomeCtrl', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        $(document).foundation();
    });

});