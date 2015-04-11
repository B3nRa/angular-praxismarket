﻿angular.module('praxismarket', ['ngMaterial'])
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
    controller('cardController', function ($scope) {
        $scope.joboffers = [
            {
                'company': 'Pharmakon Software GmbH',
                'title': 'Werkstudent (m/w) - Kampagnen-Management / KA-DG141105',
                'location': 'Karlsruhe',
                'description': 'Du arbeitest gern eng mit Gründern zusammen, lernst das operative Geschäft eines Startups kennen und bist bei der Entwicklung von neuen Ideen hautnah dabei? Dann ist dieses Praktikum genau richtig für dich. Was Dich erwartet # Du bekommst Einblicke in Bereiche wie Produktentwicklung, Algorithmen, Marketing und Finanzierung # Du betreust eigenständig Projekte und setzt eigene Ideen um # Du profitierst während und nach dem Praktikum vom Netzwerk der Gründer, die dir als Mentoren für die Umsetzung eigener Geschäftsideen zur Verfügung stehen # Du übernimmst Verantwortung und arbeitest selbständig, wofür dir ein moderner Arbeitsplatz zur Verfügung steht Was Du mitbringen solltest # Du hast Interesse an Unternehmertum oder spielst mit dem Gedanken später selbst zu gründen # Du glaubst auch, dass es an der Zeit ist Spam-Werbung durch interessante Newsletter zu ersetzen # Du bist offen und arbeitest gerne mit Menschen # Du lernst dich schnell in neue Sachverhalte ein und scheust nicht davor zurück tatkräftig in einem Team mitzuarbeiten # Du bringst 3 bis 6 Monate Zeit mit und sprichst fließend Deutsch oder Englisch',
                'firstname': 'Susanne',
                'lastname': 'Sonne'
            },
            {'company': 'PROCAD GmbH & Co. KG', 'title': 'Bachelor- oder Master- Abschlussarbeit - Evaluation von Systemen zur Speicherung und Realtime-Analyse großer Datenmengen', 'location': 'Berlin','description': 'Du bist kommunikativ und arbeitest gerne mit Menschen, dich stören schlechte Newsletter, wie sie heute leider üblich sind, du trägst lieber Verantwortung als dich im Konzern zu verstecken? Dann ist dieses Praktikum genau richtig für dich. Was Dich erwartet. # Ein ehrgeiziges, begeistertes Team # Ein innovatives Produkt "on the edge of technology" # Du lernst vom ersten Tag, wie man Marketing und Vertrieb in einem jungen IT-Unternehmen aufbaut # Du betreust eigenständig Projekte und setzt eigene Ideen um # Du übernimmst Verantwortung und arbeitest selbständig, wofür dir ein moderner ärbeitsplatz zur Verfügung steht Was Du mitbringen solltest # Lust in einem au strebenden Startup zu arbeiten # Freude an der Kommunkation mit Menschen # Laufendes Studium an einer Hochschule oder Universität # Begeisterung und selbständiges arbeiten Weitere Details siehe PDF-Ausschreibung.', 'firstname': 'Lisa', 'lastname': 'Göpferich'}
        ];
    });
