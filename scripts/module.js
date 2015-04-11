angular.module('praxismarket', ['ngMaterial'])
    .controller('MainController', function ($scope) {
        $scope.appName = "Praxis Market";
    })
    .controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle()
                .then(function () {
                    $log.debug("toggle left is done");
                });
        };
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    }).
    controller('cardController', function ($scope, $mdDialog) {
        $scope.joboffers = [
            {
                'company': 'Foo',
                'title': 'Bar',
                'location': 'Karlsruhe',
                'firstname': 'Susanne',
                'lastname': 'Sonne'
            },
            {'company': 'Blub', 'title': 'Hihi', 'location': 'Berlin', 'firstname': 'Susanne', 'lastname': 'Sonne'}
        ];

        $scope.showCompanyDetails = function(ev, companyId){
            var companies = [{ 'name': 'FOOBAR COMPANY',
                'description': 'Lorem Ipsum',
                'website': 'http://drop.social',
                'street': 'Philippstr.',
                'city': 'Karlsruhe',
                'numberOfEmployees': '9',
                'country': 'Germany'}];
            var company = companies[companyId];
            $scope.companyDetails = {
                'name': company.name,
                'description': company.description,
                'website': company.website,
                'street': company.street,
                'city': company.city,
                'numberOfEmployees': company.numberOfEmployees,
                'country': company.country
            }

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'companyDetails.template.html',
                targetEvent: ev,
                resolve: {company: function(){ return company;}}
            })
                .then(function(answer) {
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.alert = 'You cancelled the dialog.';
                });
        }

        $scope.showAdvanced = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'companyDetails.template.html',
                targetEvent: ev
            })
                .then(function(answer) {
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };

        function DialogController($scope, $mdDialog, company) {
            $scope.company = company;

            $scope.hide = function() {
                $mdDialog.hide();
            };
            $scope.cancel = function() {
                $mdDialog.cancel();
            };
            $scope.answer = function(answer) {
                $mdDialog.hide(answer);
            };
        }
    });
