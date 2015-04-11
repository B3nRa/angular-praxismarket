angular.module('praxismarket', [])
.controller('cardController', function($scope){
        $scope.joboffers = [
            {'company': 'Foo', 'title': 'Bar', 'location': 'Karlsruhe'},
            {'company': 'Blub', 'title': 'Hihi', 'location': 'Berlin'}
        ];
    });