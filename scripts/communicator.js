(function (global) {
    'use strict';

    var internal = {
        serviceUrl: "http://praxis-market.appspot.com/?url=",
        getAllOfferTypes: function (cb) {

            var url = internal.serviceUrl + "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offertypes/all"
            var request = new XMLHttpRequest();
            request.open('GET', url, true);  // `false` makes the request synchronous
            request.onload = function () {
                var jsonObj = JSON.parse(request.responseText);
                for (var i in jsonObj) {
                    switch (jsonObj[i].id) {
                        case 3:
                            jsonObj[i].icon = "fa-wrench";
                            break;
                        case 5:
                            jsonObj[i].icon = "fa-line-chart";
                            break;
                        case 6:
                            jsonObj[i].icon = "fa-book";
                            break;
                        case 9:
                            jsonObj[i].icon = "fa-graduation-cap";
                            break;
                        default:
                            jsonObj[i].icon = "fa-info";
                            break;
                    }
                }
                cb(jsonObj);
            }
            request.send(null);
        },
        getAllOffersByType: function (type, limit, cb) {
            if (limit === undefined) {
                limit = -1;
            }
            var url = internal.serviceUrl + "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/" + type + "/0/" + limit;
            var request = new XMLHttpRequest();
            request.open('GET', url, true);  // `false` makes the request synchronous
            request.onload = function () {
                var jsonObj = JSON.parse(request.responseText);

                for (var i in jsonObj.offers) {
                    jsonObj.offers[i].company = jsonObj.companies[jsonObj.offers[i].companyId];
                    jsonObj.offers[i].company.encodedAddress = encodeURIComponent(jsonObj.offers[i].company.street
                    + " " + jsonObj.offers[i].company.zipCode + " " + jsonObj.offers[i].company.city);
                }

                cb(jsonObj.offers, jsonObj.companies);
            }
            request.send(null);
        },
        getMoreOffersByType: function (type, count) {
            var url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/" + type + "/" + count + "/10";
            console.log("Request Url: " + url);
            var moreOffers = [
                {
                    "firstname": "Lisa",
                    "lastname": "G�pferich",
                    "email": "lisa.goepferich@1und1.de",
                    "title": "Praktikant (m/w) - Produktmanagement / KA-HN140201",
                    "description": "Ihre Aufgaben:\r\nAls Praktikant im Produktmanagement f�r Infrastrukturprodukte unterst�tzen Sie das Produktmanagement der Hosting-Produkte. Sie sind ein Teil des Produktmanagement Server Teams und entwickeln z. B. Tarifanlagen und Tarifmodule im Rahmen der Produktentwicklung.\r\n\r\n- Mitarbeit bei der Entwicklung neuer Tarifstrukturen f�r Hosting-Produkte.\r\n- Analyse m�glicher Tariffehler und Erarbeitung von Vorschl�gen zur Behebung.\r\n- Unterst�tzung der internen Auftraggeber im Hinblick auf die Eignung von Tarifstrukturen.\r\n- Internationale Wettbewerbsbeobachtung und -analyse.\r\n\r\nIhr Profil:\r\nSie sind Student des Studiengangs (Wirtschafts-) Informatik und konnten idealerweise bereits erste Erfahrungen im IT- / Hosting-Umfeld sammeln.\r\n\r\n- Analytische F�higkeiten.\r\n- Ein hohes Ma� an Ziel- und Ergebnisorientierung.\r\n- Eine schnelle Auffassungsgabe.\r\n- Begeisterungsf�higkeit f�r das Hosting-Produktumfeld.\r\n- Teamf�higkeit.\r\n- Gute MS Office-Kenntnisse.",
                    "location": "Karlsruhe",
                    "company": "1&1"
                },
                {
                    "firstname": "Simon",
                    "lastname": "Echle",
                    "email": "echle@avocado-se.de",
                    "title": "Webbasierte Softwareentwicklung",
                    "description": "Wir bieten ein dynamisches und kreatives Umfeld in einem jungen Team und die M�glichkeit Verantwortung in laufenden Kundenprojekten zu �bernehmen!\r\n\r\nIhr Aufgaben l�gen in der Konzeption und Entwicklung von individuellen Softwarel�sungen im Technologieumfeld: \r\nC#, Java, PHP,\r\nJavascript(EmberJS, jQuery, Ext.JS),\r\nMySQL, Elasticsearch, MSSQL, MongoDB\r\n\r\n\r\nDie avocado software engineering GmbH betreibt Software Engineering f�r mittelst�ndische und kleine Unternehmen auf deren individuelle Anforderungen hin. Wir bieten unseren Kunden Software-L�sungen zur Unterst�tzung deren individueller Gesch�ftsprozesse, begleitet von einer innovativen IT-Beratung und zuverl�ssigen IT-Services - alles aus einer Hand.\r\n\r\nHaben wir Ihr Interesse geweckt?\r\nDann bewerben Sie sich mit aussagekr�ftigen Bewerbungsunterlagen und unter Angabe Ihres fr�hesten Eintrittstermins per Email an jobs@avocado-se.de\r\nIhre Fragen beantwortet gerne Simon Echle (+49 7221 996498-12)",
                    "location": "Baden-Baden",
                    "company": "avocado software engineering GmbH"
                },
                {
                    "firstname": "Lisa",
                    "lastname": "Kopf",
                    "email": "jobs@cas.de",
                    "title": "Praktikum/Abschlussarbeit Technology Research CAS Aviation ",
                    "description": "Wir sind f�hrender Anbieter von CRM & xRM Software und gestalten mit Customer Centricity innovative L�sungen f�r die Zukunft. Namhafte Kunden, vielf�ltige Branchenl�sungen und ein hohes Investment in die Potentialentfaltung der Mitarbeiter zeichnen uns aus. Das spiegelt sich in einer hohen Mitarbeiterzufriedenheit wieder. Erlebe die CAS selbst und werde Teil unseres wachsenden Teams aus �ber 300 Mitarbeitern auf dem CAS Campus. \r\n\r\nHier wird Innovation f�r dich greifbar � bringe dein Wissen und deine Ideen in einem internationalen Forschungsprojekt mit ein.\r\nPraktikum/Abschlussarbeit Technology Research CAS Aviation \r\n\r\nWas sind deine Aufgaben? \r\nZiel des Projekts ist die L�cke zwischen virtueller Welt (Helikopter-Simulator-Training) und realer Welt (echter Helikopter) durch eine Middleware zu schlie�en. Dies basiert auf einer Reihe fortgeschrittener Konzepte wie IOT (Internet of Things), EDA (Event driven architecture), SOA und Augmented Reality. Derzeit geht es um folgende Themen:\r\n�\tDu evaluierst geeignete State-of-the-art Technologien aus den Bereichen IOT und SOA zur Realisierung des Projekts.\r\n�\tDu untersuchst relevante Prozesse in der Helikopterherstellung und leitest ein Referenzmodell daraus ab.\r\n�\tDu �bertr�gst entwickelte Architekturen und Modelle auf andere Industriezweige (z.B. Automotive).\r\n�\tDie konkrete Themenstellung erarbeiten wir dann gemeinsam im pers�nlichen Gespr�ch. \r\n\r\nWas bringst du mit? \r\n�\tDu studierst Wirtschaftsinformatik, Wirtschaftsingenieurwesen oder einen vergleichbaren Studiengang. \r\n�\tRequirements Engineering und Technology Scouting kennst du bereits theoretisch und m�chtest es nun praktisch erleben. \r\n�\tAbh�ngig vom jeweiligen Aufgabengebiet kennst du dich mit aktuellen Technologien wie z.B. Webservices mit SOAP und REST, HTML5, XML, JSF, JavaScript, iOS/ Android UI Development, Ontologien aus.\r\n�\tGro�e Ideen entstehen nicht im stillen K�mmerlein, deshalb solltest du kommunikativ sein.\r\n�\tF�r dich ist Teamgeist genauso wichtig wie f�r uns.\r\n�\tWillst du dein Englisch in der Praxis anwenden? Umso besser!\r\n\r\nWas macht uns besonders?\r\n�\tDer CAS Campus mit Raum f�r Entfaltung\r\n�\tHelle B�ros mit 2-3 Kollegen\r\n�\tVitamine f�rs Herz und Koffein f�r den Kopf\r\n�\tFitnessangebote f�r Sportskanonen\r\n�\tFlexUrlaub f�r jede Lebenslage\r\nMach dir dein eigenes Bild unter www.cas-selbst-erleben.de.\r\n\r\nNeugierig?\r\nSende uns deine Unterlagen gerne per E-Mail an jobs@cas.de zu. Wir freuen uns, dich kennen zu lernen. Bei Fragen sind wir f�r dich da:\r\nLisa Kopf, CAS-Weg 1-5, 76131 Karlsruhe, Tel.: 0721/9638-657.\r\n",
                    "location": "Karlsruhe",
                    "company": "CAS Software AG"
                }
            ];
            return moreOffers;
        },
        getNotePad: function (cb) {
            var url = internal.serviceUrl + "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/notepad/0/-1";
            var request = new XMLHttpRequest();
            request.open('GET', url, true);  // `false` makes the request synchronous
            request.onload = function () {
                var jsonObj = JSON.parse(request.responseText);

                for (var i in jsonObj.offers) {
                    jsonObj.offers[i].company = jsonObj.companies[jsonObj.offers[i].companyId];
                }

                cb(jsonObj.offers);
            }
            request.send(null);
        }
    };

    global.communicator = {
        getAllOfferTypes: function (cb) {
            //return [];
            return internal.getAllOfferTypes(cb);
        },
        getOffersByType: function (type, limit, cb) {
            //return [];
            return internal.getAllOffersByType(type, limit, cb);
        },
        getMoreOffersByType: function (type, count) {
            //return [];
            return internal.getMoreOffersByType(type, count);
        },
        getNotePad: function (cb) {
            //return [];
            return internal.getNotePad(cb);
        }
    };
}(window));