angular.module('praxismarket', ['ngMaterial'])
    .factory('dataService', function () {
        //var streamData = {};
        var dialog;
        return {
            //getStreamData: function () {
            //    return streamData;
            //},
            //setStreamData: function (newStreamData) {
            //    streamData = newStreamData;
            //},
            //resetStreamData: function () {
            //    streamData = {};
            //},
            getDialog: function () {
                return dialog;
            },
            setDialog: function (newDialog) {
                dialog = newDialog;
            }
        };
    })
    .controller('MainController', function ($scope, dataService, $mdSidenav, $mdMedia, $mdDialog) {
        // ==============================
        // ===== General
        // ==============================
        $scope.appName = "Praxis Market";

        var offerCallback = function (offers) {
            //dataService.setStreamData(offers);
            $scope.joboffers = offers;
            $scope.$apply();
        }
        // ==============================
        // ===== Side Nav
        // ==============================
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

        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
        $scope.typeSelected = function (offer) {
            $scope.selectedType = offer.shortname;
            console.log("selected: " + offer.shortname);
            if ($mdMedia('gt-md')) {
                // request for desktop
                communicator.getOffersByType(offer.shortname, undefined, offerCallback);
                $scope.moreOffersAvailable = false;
            } else {
                // request on mobile
                communicator.getOffersByType(offer.shortname, 10, offerCallback);
                $scope.moreOffersAvailable = true;
            }

            //dataService.setStreamData(offers);
        };

        communicator.getAllOfferTypes(function (offers) {
            $scope.offerTypes = offers;
            $scope.$apply();
        });

        // ==============================
        // ===== Cards
        // ==============================
        //$scope.$watch(function (scope) {
        //    return dataService.getStreamData();
        //}, function (newVal, oldVal, scope) {
        //    if (newVal !== oldVal) {
        //        scope.joboffers = newVal;
        //    }
        //}, true);

        $scope.loadMoreOffers = function () {
            var currentCardCount = $window.document.getElementsByClassName("card").length;
            var moreOffers = communicator.getMoreOffersByType($scope.selectedType, currentCardCount);
            //dataService.setStreamData(dataService.getStreamData().concat(moreOffers));
        }

        var offers = [
            {
                'company': {'companyName': 'Pharmakon Software GmbH'},
                'title': 'Werkstudent (m/w) - Kampagnen-Management / KA-DG141105',
                'usageSite': 'Karlsruhe',
                'description': 'Du arbeitest gern eng mit Gr�ndern zusammen, lernst das operative Gesch�ft eines Startups kennen und bist bei der Entwicklung von neuen Ideen hautnah dabei? Dann ist dieses Praktikum genau richtig f�r dich. Was Dich erwartet # Du bekommst Einblicke in Bereiche wie Produktentwicklung, Algorithmen, Marketing und Finanzierung # Du betreust eigenst�ndig Projekte und setzt eigene Ideen um # Du profitierst w�hrend und nach dem Praktikum vom Netzwerk der Gr�nder, die dir als Mentoren f�r die Umsetzung eigener Gesch�ftsideen zur Verf�gung stehen # Du �bernimmst Verantwortung und arbeitest selbst�ndig, wof�r dir ein moderner Arbeitsplatz zur Verf�gung steht Was Du mitbringen solltest # Du hast Interesse an Unternehmertum oder spielst mit dem Gedanken sp�ter selbst zu gr�nden # Du glaubst auch, dass es an der Zeit ist Spam-Werbung durch interessante Newsletter zu ersetzen # Du bist offen und arbeitest gerne mit Menschen # Du lernst dich schnell in neue Sachverhalte ein und scheust nicht davor zur�ck tatkr�ftig in einem Team mitzuarbeiten # Du bringst 3 bis 6 Monate Zeit mit und sprichst flie�end Deutsch oder Englisch',
                'firstname': 'Susanne',
                'lastname': 'Sonne'
            },
            {
                'company': {'companyName': 'PROCAD GmbH & Co. KG'},
                'title': 'Bachelor- oder Master- Abschlussarbeit - Evaluation von Systemen zur Speicherung und Realtime-Analyse gro�er Datenmengen',
                'usageSite': 'Berlin',
                'description': 'Du bist kommunikativ und arbeitest gerne mit Menschen, dich st�ren schlechte Newsletter, wie sie heute leider �blich sind, du tr�gst lieber Verantwortung als dich im Konzern zu verstecken? Dann ist dieses Praktikum genau richtig f�r dich. Was Dich erwartet. # Ein ehrgeiziges, begeistertes Team # Ein innovatives Produkt "on the edge of technology" # Du lernst vom ersten Tag, wie man Marketing und Vertrieb in einem jungen IT-Unternehmen aufbaut # Du betreust eigenst�ndig Projekte und setzt eigene Ideen um # Du �bernimmst Verantwortung und arbeitest selbst�ndig, wof�r dir ein moderner �rbeitsplatz zur Verf�gung steht Was Du mitbringen solltest # Lust in einem au strebenden Startup zu arbeiten # Freude an der Kommunkation mit Menschen # Laufendes Studium an einer Hochschule oder Universit�t # Begeisterung und selbst�ndiges arbeiten Weitere Details siehe PDF-Ausschreibung.',
                'firstname': 'Lisa',
                'lastname': 'G�pferich'
            }
        ];
        $scope.joboffers = offers;
        //dataService.setStreamData(offers);

        $scope.showCompanyDetails = function (ev, companyId) {
            ev.stopPropagation();
            var companies = [{
                'name': 'FOOBAR COMPANY',
                'description': 'Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
                'website': 'http://drop.social',
                'street': 'Philippstr. 3',
                'city': 'Karlsruhe',
                'zipcode': '12345',
                'numberOfEmployees': '9',
                'country': 'Germany',
                'contact': {
                    'firstName': 'Clark',
                    'secondName': 'Gable',
                    'phone': '+49 12345',
                    'mail': 'foo@bar.com'
                }
            }];
            var company = companies[companyId];

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
        };


        function DialogController($scope, $mdDialog, dataService, company) {
            $scope.company = company;
            dataService.setDialog($mdDialog);

            $scope.stopPropagation = function (event) {
                event.stopPropagation();
            }
        }

        $scope.closeDialog = function () {
            var dialog = dataService.getDialog();
            if (dialog) {
                dataService.setDialog(undefined);
                dialog.hide();
            }
        }
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    });
;
