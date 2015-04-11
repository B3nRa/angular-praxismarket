angular.module('praxismarket', ['ngMaterial'])
    .controller('MainController', function($scope) {
        $scope.appName = "Praxis Market";
    })
    .controller('AppCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = function() {
            $mdSidenav('left').toggle()
                .then(function(){
                    $log.debug("toggle left is done");
                });
        };
        $scope.focus = function() {
            console.log("focus");
            angular.element(document.getElementById('search-icon')).addClass("focus");
        };
        $scope.blur = function() {
            console.log("unfocus");
            angular.element(document.getElementById('search-icon')).removeClass("focus");
        }
    })
    .controller('LeftCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
            $mdSidenav('left').close()
                .then(function(){
                    $log.debug("close LEFT is done");
                });
        };
    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    });

