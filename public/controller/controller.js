/**
 * Created by Luiz Henrique Soares on 10/06/2016.
 */

var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    
    $http.get('/conctactlist').success(function (response) {
        $scope.conctactList = response;
    });

}]);