angular.module('heroku.controllers', [])
.controller('homeController', ['$scope', function($scope) {
    $scope.message = 'hello from angular'
}]);