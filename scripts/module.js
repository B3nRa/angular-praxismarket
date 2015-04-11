angular.module('praxismarket', ['ngMaterial'])
    .factory('dataService', function () {
        var streamData = {};
        return {
            getStreamData: function() {
                return streamData;
            },
            setStreamData: function(newStreamData) {
                streamData = newStreamData;
            },
            resetStreamData: function() {
                streamData = {};
            }
        };
    })
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
        $scope.focus = function () {
            console.log("focus");
            angular.element(document.getElementById('search-icon')).addClass("focus");
        };
        $scope.blur = function () {
            console.log("unfocus");
            angular.element(document.getElementById('search-icon')).removeClass("focus");
        }
    })
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, dataService, $mdMedia) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
        $scope.typeSelected = function(offer) {
            console.log("selected: " + offer.shortname);
            if($mdMedia('gt-md')) {
                // request for desktop
                var offers = communicator.getOffersByType(offer.shortname);
            } else {
                // request on mobile
                var offers = communicator.getOffersByType(offer.shortname, 10);
            }

            dataService.setStreamData(offers);
        };

        $scope.offerTypes = communicator.getAllOfferTypes();
    })
    .controller('cardController', function ($scope, $mdDialog, dataService) {
        $scope.$watch(function(scope) {
            return dataService.getStreamData();
        }, function(newVal, oldVal, scope) {
            if(newVal !== oldVal) {
                scope.joboffers = newVal;
            }
        }, true);

        var offers =  [
            {
                'company': 'Pharmakon Software GmbH',
                'title': 'Werkstudent (m/w) - Kampagnen-Management / KA-DG141105',
                'location': 'Karlsruhe',
                'description': 'Du arbeitest gern eng mit Gründern zusammen, lernst das operative Geschäft eines Startups kennen und bist bei der Entwicklung von neuen Ideen hautnah dabei? Dann ist dieses Praktikum genau richtig für dich. Was Dich erwartet # Du bekommst Einblicke in Bereiche wie Produktentwicklung, Algorithmen, Marketing und Finanzierung # Du betreust eigenständig Projekte und setzt eigene Ideen um # Du profitierst während und nach dem Praktikum vom Netzwerk der Gründer, die dir als Mentoren für die Umsetzung eigener Geschäftsideen zur Verfügung stehen # Du übernimmst Verantwortung und arbeitest selbständig, wofür dir ein moderner Arbeitsplatz zur Verfügung steht Was Du mitbringen solltest # Du hast Interesse an Unternehmertum oder spielst mit dem Gedanken später selbst zu gründen # Du glaubst auch, dass es an der Zeit ist Spam-Werbung durch interessante Newsletter zu ersetzen # Du bist offen und arbeitest gerne mit Menschen # Du lernst dich schnell in neue Sachverhalte ein und scheust nicht davor zurück tatkräftig in einem Team mitzuarbeiten # Du bringst 3 bis 6 Monate Zeit mit und sprichst fließend Deutsch oder Englisch',
                'firstname': 'Susanne',
                'lastname': 'Sonne'
            },
            {
                'company': 'PROCAD GmbH & Co. KG',
                'title': 'Bachelor- oder Master- Abschlussarbeit - Evaluation von Systemen zur Speicherung und Realtime-Analyse großer Datenmengen',
                'location': 'Berlin',
                'description': 'Du bist kommunikativ und arbeitest gerne mit Menschen, dich stören schlechte Newsletter, wie sie heute leider üblich sind, du trägst lieber Verantwortung als dich im Konzern zu verstecken? Dann ist dieses Praktikum genau richtig für dich. Was Dich erwartet. # Ein ehrgeiziges, begeistertes Team # Ein innovatives Produkt "on the edge of technology" # Du lernst vom ersten Tag, wie man Marketing und Vertrieb in einem jungen IT-Unternehmen aufbaut # Du betreust eigenständig Projekte und setzt eigene Ideen um # Du übernimmst Verantwortung und arbeitest selbständig, wofür dir ein moderner ärbeitsplatz zur Verfügung steht Was Du mitbringen solltest # Lust in einem au strebenden Startup zu arbeiten # Freude an der Kommunkation mit Menschen # Laufendes Studium an einer Hochschule oder Universität # Begeisterung und selbständiges arbeiten Weitere Details siehe PDF-Ausschreibung.',
                'firstname': 'Lisa',
                'lastname': 'Göpferich'
            }
        ];
        $scope.joboffers = offers;
        dataService.setStreamData(offers);

        $scope.showCompanyDetails = function (ev, companyId) {
            var companies = [{
                'name': 'FOOBAR COMPANY',
                'description': 'Lorem Ipsum',
                'website': 'http://drop.social',
                'street': 'Philippstr.',
                'city': 'Karlsruhe',
                'numberOfEmployees': '9',
                'country': 'Germany'
            }];
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
                resolve: {
                    company: function () {
                        return company;
                    }
                }
            })
                .then(function (answer) {
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.alert = 'You cancelled the dialog.';
                });
        }

        $scope.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'companyDetails.template.html',
                targetEvent: ev
            })
                .then(function (answer) {
                    $scope.alert = 'You said the information was "' + answer + '".';
                }, function () {
                    $scope.alert = 'You cancelled the dialog.';
                });
        };

        function DialogController($scope, $mdDialog, company) {
            $scope.company = company;

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    });