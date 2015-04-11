angular.module('praxismarket', [])
.controller('cardController', function($scope){
        $scope.joboffers = [
            {'company': 'Foo', 'title': 'Bar', 'location': 'Karlsruhe', 'firstname': 'Susanne', 'lastname': 'Sonne'},
            {'company': 'Blub', 'title': 'Hihi', 'location': 'Berlin', 'firstname': 'Susanne', 'lastname': 'Sonne'}
        ];
    });