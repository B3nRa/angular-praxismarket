angular.module('praxismarket', ['ngMaterial'])
    .controller('MainController', function ($scope) {
        $scope.appName = "Praxis Market";

        $scope.closeDialog = function () {
            // Easily hides most recent dialog shown...
            // no specific instance reference is needed.
            if ($scope.dialog) {
                $scope.dialog.hide();
            }
        }
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
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $http) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };

        //$http.defaults.headers.common.Authorization = "Basic cmFiZTEwMTI6RnJpZWRyaWNoOTI=";
        //$http.defaults.headers.common.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8";
        //$http.get('https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offertypes/all',
        //    {headers: {Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'}})
        //    .then(function (response) {
        //        console.log("�hio");
        //        window.foo2 = response;
        //    });
        //var xhr = new XMLHttpRequest();
        //xhr.open('GET', 'https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offertypes/all', false);
        //xhr.setRequestHeader('Authorization', 'Basic cmFiZTEwMTI6RnJpZWRyaWNoOTI=');
        ////xhr.setrequestheader('Access-Control-Request-Headers', 'Authorization');
        ////xhr.setrequestheader('X-Testing', 'testing');
        //xhr.send(null);

        //if(xhr.status === 401){
        //    xhr.
        //}
        //console.log(xhr.responseText);

    })
    .controller('cardController', function ($scope, $mdDialog) {
        $scope.joboffers = [
            {
                'company': 'Pharmakon Software GmbH',
                'title': 'Werkstudent (m/w) - Kampagnen-Management / KA-DG141105',
                'location': 'Karlsruhe',
                'description': 'Du arbeitest gern eng mit Gr�ndern zusammen, lernst das operative Gesch�ft eines Startups kennen und bist bei der Entwicklung von neuen Ideen hautnah dabei? Dann ist dieses Praktikum genau richtig f�r dich. Was Dich erwartet # Du bekommst Einblicke in Bereiche wie Produktentwicklung, Algorithmen, Marketing und Finanzierung # Du betreust eigenst�ndig Projekte und setzt eigene Ideen um # Du profitierst w�hrend und nach dem Praktikum vom Netzwerk der Gr�nder, die dir als Mentoren f�r die Umsetzung eigener Gesch�ftsideen zur Verf�gung stehen # Du �bernimmst Verantwortung und arbeitest selbst�ndig, wof�r dir ein moderner Arbeitsplatz zur Verf�gung steht Was Du mitbringen solltest # Du hast Interesse an Unternehmertum oder spielst mit dem Gedanken sp�ter selbst zu gr�nden # Du glaubst auch, dass es an der Zeit ist Spam-Werbung durch interessante Newsletter zu ersetzen # Du bist offen und arbeitest gerne mit Menschen # Du lernst dich schnell in neue Sachverhalte ein und scheust nicht davor zur�ck tatkr�ftig in einem Team mitzuarbeiten # Du bringst 3 bis 6 Monate Zeit mit und sprichst flie�end Deutsch oder Englisch',
                'firstname': 'Susanne',
                'lastname': 'Sonne'
            },
            {
                'company': 'PROCAD GmbH & Co. KG',
                'title': 'Bachelor- oder Master- Abschlussarbeit - Evaluation von Systemen zur Speicherung und Realtime-Analyse gro�er Datenmengen',
                'location': 'Berlin',
                'description': 'Du bist kommunikativ und arbeitest gerne mit Menschen, dich st�ren schlechte Newsletter, wie sie heute leider �blich sind, du tr�gst lieber Verantwortung als dich im Konzern zu verstecken? Dann ist dieses Praktikum genau richtig f�r dich. Was Dich erwartet. # Ein ehrgeiziges, begeistertes Team # Ein innovatives Produkt "on the edge of technology" # Du lernst vom ersten Tag, wie man Marketing und Vertrieb in einem jungen IT-Unternehmen aufbaut # Du betreust eigenst�ndig Projekte und setzt eigene Ideen um # Du �bernimmst Verantwortung und arbeitest selbst�ndig, wof�r dir ein moderner �rbeitsplatz zur Verf�gung steht Was Du mitbringen solltest # Lust in einem au strebenden Startup zu arbeiten # Freude an der Kommunkation mit Menschen # Laufendes Studium an einer Hochschule oder Universit�t # Begeisterung und selbst�ndiges arbeiten Weitere Details siehe PDF-Ausschreibung.',
                'firstname': 'Lisa',
                'lastname': 'G�pferich'
            }
        ];

        $scope.showCompanyDetails = function (ev, companyId) {
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
        }


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
            $scope.closeDialog = function () {
                $mdDialog.hide();
            }
        }
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    })
    .run(function ($http) {
        $http.defaults.headers.common.Authorization = "Basic cmFiZTEwMTI6RnJpZWRyaWNoOTI=";
        $http.defaults.headers.common.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8";
    });
;
