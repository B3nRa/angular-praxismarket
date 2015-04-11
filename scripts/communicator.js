(function (global) {
    'use strict';

    var internal = {
        serviceUrl: "http://praxis-market.appspot.com/?url=",
        getAllOfferTypes: function () {
            // TODO: icon is added manually -> build a switch statement for real implementation

            var url = internal.serviceUrl + "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offertypes/all"
            var request = new XMLHttpRequest();
            request.open('GET', url, false);  // `false` makes the request synchronous
            request.send(null);
            if (request.status === 200) {
                console.log(request.responseText);
            } else {
                global.wtfoo = request;
                console.log("fuck");
            }

            var allOfferTypes = [
                {"id": 9, "name": "Abschlussarbeit", "shortname": "thesis", "icon": "fa-graduation-cap"},
                {"id": 3, "name": "Praxissemester", "shortname": "internship", "icon": "fa-wrench"},
                {"id": 5, "name": "Stellenangebot", "shortname": "joboffer", "icon": "fa-line-chart"},
                {"id": 6, "name": "Werkstudent", "shortname": "workingstudent", "icon": "fa-book"}
            ];
            return allOfferTypes;
        },
        getAllOffersByType: function (type, limit) {
            if(limit === undefined) {
                limit = -1;
            }
            // TODO: webservice sends more information it is mapped to reduce form
            // TODO: company is not directly available but has to be parsed from data
            var url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/" + type + "/0/" + limit;
            console.log("Request Url: " + url);
            var offers = [
                {
                    "firstname": "Lisa",
                    "lastname": "Göpferich",
                    "email": "lisa.goepferich@1und1.de",
                    "title": "Praktikant (m/w) - Produktmanagement / KA-HN140201",
                    "description": "Ihre Aufgaben:\r\nAls Praktikant im Produktmanagement für Infrastrukturprodukte unterstützen Sie das Produktmanagement der Hosting-Produkte. Sie sind ein Teil des Produktmanagement Server Teams und entwickeln z. B. Tarifanlagen und Tarifmodule im Rahmen der Produktentwicklung.\r\n\r\n- Mitarbeit bei der Entwicklung neuer Tarifstrukturen für Hosting-Produkte.\r\n- Analyse möglicher Tariffehler und Erarbeitung von Vorschlägen zur Behebung.\r\n- Unterstützung der internen Auftraggeber im Hinblick auf die Eignung von Tarifstrukturen.\r\n- Internationale Wettbewerbsbeobachtung und -analyse.\r\n\r\nIhr Profil:\r\nSie sind Student des Studiengangs (Wirtschafts-) Informatik und konnten idealerweise bereits erste Erfahrungen im IT- / Hosting-Umfeld sammeln.\r\n\r\n- Analytische Fähigkeiten.\r\n- Ein hohes Maß an Ziel- und Ergebnisorientierung.\r\n- Eine schnelle Auffassungsgabe.\r\n- Begeisterungsfähigkeit für das Hosting-Produktumfeld.\r\n- Teamfähigkeit.\r\n- Gute MS Office-Kenntnisse.",
                    "location": "Karlsruhe",
                    "company": "1&1"
                },
                {
                    "firstname": "Simon",
                    "lastname": "Echle",
                    "email": "echle@avocado-se.de",
                    "title": "Webbasierte Softwareentwicklung",
                    "description": "Wir bieten ein dynamisches und kreatives Umfeld in einem jungen Team und die Möglichkeit Verantwortung in laufenden Kundenprojekten zu übernehmen!\r\n\r\nIhr Aufgaben lägen in der Konzeption und Entwicklung von individuellen Softwarelösungen im Technologieumfeld: \r\nC#, Java, PHP,\r\nJavascript(EmberJS, jQuery, Ext.JS),\r\nMySQL, Elasticsearch, MSSQL, MongoDB\r\n\r\n\r\nDie avocado software engineering GmbH betreibt Software Engineering für mittelständische und kleine Unternehmen auf deren individuelle Anforderungen hin. Wir bieten unseren Kunden Software-Lösungen zur Unterstützung deren individueller Geschäftsprozesse, begleitet von einer innovativen IT-Beratung und zuverlässigen IT-Services - alles aus einer Hand.\r\n\r\nHaben wir Ihr Interesse geweckt?\r\nDann bewerben Sie sich mit aussagekräftigen Bewerbungsunterlagen und unter Angabe Ihres frühesten Eintrittstermins per Email an jobs@avocado-se.de\r\nIhre Fragen beantwortet gerne Simon Echle (+49 7221 996498-12)",
                    "location": "Baden-Baden",
                    "company": "avocado software engineering GmbH"
                },
                {
                    "firstname": "Lisa",
                    "lastname": "Kopf",
                    "email": "jobs@cas.de",
                    "title": "Praktikum/Abschlussarbeit Technology Research CAS Aviation ",
                    "description": "Wir sind führender Anbieter von CRM & xRM Software und gestalten mit Customer Centricity innovative Lösungen für die Zukunft. Namhafte Kunden, vielfältige Branchenlösungen und ein hohes Investment in die Potentialentfaltung der Mitarbeiter zeichnen uns aus. Das spiegelt sich in einer hohen Mitarbeiterzufriedenheit wieder. Erlebe die CAS selbst und werde Teil unseres wachsenden Teams aus über 300 Mitarbeitern auf dem CAS Campus. \r\n\r\nHier wird Innovation für dich greifbar – bringe dein Wissen und deine Ideen in einem internationalen Forschungsprojekt mit ein.\r\nPraktikum/Abschlussarbeit Technology Research CAS Aviation \r\n\r\nWas sind deine Aufgaben? \r\nZiel des Projekts ist die Lücke zwischen virtueller Welt (Helikopter-Simulator-Training) und realer Welt (echter Helikopter) durch eine Middleware zu schließen. Dies basiert auf einer Reihe fortgeschrittener Konzepte wie IOT (Internet of Things), EDA (Event driven architecture), SOA und Augmented Reality. Derzeit geht es um folgende Themen:\r\n•\tDu evaluierst geeignete State-of-the-art Technologien aus den Bereichen IOT und SOA zur Realisierung des Projekts.\r\n•\tDu untersuchst relevante Prozesse in der Helikopterherstellung und leitest ein Referenzmodell daraus ab.\r\n•\tDu überträgst entwickelte Architekturen und Modelle auf andere Industriezweige (z.B. Automotive).\r\n•\tDie konkrete Themenstellung erarbeiten wir dann gemeinsam im persönlichen Gespräch. \r\n\r\nWas bringst du mit? \r\n•\tDu studierst Wirtschaftsinformatik, Wirtschaftsingenieurwesen oder einen vergleichbaren Studiengang. \r\n•\tRequirements Engineering und Technology Scouting kennst du bereits theoretisch und möchtest es nun praktisch erleben. \r\n•\tAbhängig vom jeweiligen Aufgabengebiet kennst du dich mit aktuellen Technologien wie z.B. Webservices mit SOAP und REST, HTML5, XML, JSF, JavaScript, iOS/ Android UI Development, Ontologien aus.\r\n•\tGroße Ideen entstehen nicht im stillen Kämmerlein, deshalb solltest du kommunikativ sein.\r\n•\tFür dich ist Teamgeist genauso wichtig wie für uns.\r\n•\tWillst du dein Englisch in der Praxis anwenden? Umso besser!\r\n\r\nWas macht uns besonders?\r\n•\tDer CAS Campus mit Raum für Entfaltung\r\n•\tHelle Büros mit 2-3 Kollegen\r\n•\tVitamine fürs Herz und Koffein für den Kopf\r\n•\tFitnessangebote für Sportskanonen\r\n•\tFlexUrlaub für jede Lebenslage\r\nMach dir dein eigenes Bild unter www.cas-selbst-erleben.de.\r\n\r\nNeugierig?\r\nSende uns deine Unterlagen gerne per E-Mail an jobs@cas.de zu. Wir freuen uns, dich kennen zu lernen. Bei Fragen sind wir für dich da:\r\nLisa Kopf, CAS-Weg 1-5, 76131 Karlsruhe, Tel.: 0721/9638-657.\r\n",
                    "location": "Karlsruhe",
                    "company": "CAS Software AG"
                }
            ];
            return offers;
        },
        getMoreOffersByType: function(type, count) {
            var url = "https://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offers/" + type + "/" + count + "/10";
            console.log("Request Url: " + url);
            var moreOffers = [
                {
                    "firstname": "Lisa",
                    "lastname": "Göpferich",
                    "email": "lisa.goepferich@1und1.de",
                    "title": "Praktikant (m/w) - Produktmanagement / KA-HN140201",
                    "description": "Ihre Aufgaben:\r\nAls Praktikant im Produktmanagement für Infrastrukturprodukte unterstützen Sie das Produktmanagement der Hosting-Produkte. Sie sind ein Teil des Produktmanagement Server Teams und entwickeln z. B. Tarifanlagen und Tarifmodule im Rahmen der Produktentwicklung.\r\n\r\n- Mitarbeit bei der Entwicklung neuer Tarifstrukturen für Hosting-Produkte.\r\n- Analyse möglicher Tariffehler und Erarbeitung von Vorschlägen zur Behebung.\r\n- Unterstützung der internen Auftraggeber im Hinblick auf die Eignung von Tarifstrukturen.\r\n- Internationale Wettbewerbsbeobachtung und -analyse.\r\n\r\nIhr Profil:\r\nSie sind Student des Studiengangs (Wirtschafts-) Informatik und konnten idealerweise bereits erste Erfahrungen im IT- / Hosting-Umfeld sammeln.\r\n\r\n- Analytische Fähigkeiten.\r\n- Ein hohes Maß an Ziel- und Ergebnisorientierung.\r\n- Eine schnelle Auffassungsgabe.\r\n- Begeisterungsfähigkeit für das Hosting-Produktumfeld.\r\n- Teamfähigkeit.\r\n- Gute MS Office-Kenntnisse.",
                    "location": "Karlsruhe",
                    "company": "1&1"
                },
                {
                    "firstname": "Simon",
                    "lastname": "Echle",
                    "email": "echle@avocado-se.de",
                    "title": "Webbasierte Softwareentwicklung",
                    "description": "Wir bieten ein dynamisches und kreatives Umfeld in einem jungen Team und die Möglichkeit Verantwortung in laufenden Kundenprojekten zu übernehmen!\r\n\r\nIhr Aufgaben lägen in der Konzeption und Entwicklung von individuellen Softwarelösungen im Technologieumfeld: \r\nC#, Java, PHP,\r\nJavascript(EmberJS, jQuery, Ext.JS),\r\nMySQL, Elasticsearch, MSSQL, MongoDB\r\n\r\n\r\nDie avocado software engineering GmbH betreibt Software Engineering für mittelständische und kleine Unternehmen auf deren individuelle Anforderungen hin. Wir bieten unseren Kunden Software-Lösungen zur Unterstützung deren individueller Geschäftsprozesse, begleitet von einer innovativen IT-Beratung und zuverlässigen IT-Services - alles aus einer Hand.\r\n\r\nHaben wir Ihr Interesse geweckt?\r\nDann bewerben Sie sich mit aussagekräftigen Bewerbungsunterlagen und unter Angabe Ihres frühesten Eintrittstermins per Email an jobs@avocado-se.de\r\nIhre Fragen beantwortet gerne Simon Echle (+49 7221 996498-12)",
                    "location": "Baden-Baden",
                    "company": "avocado software engineering GmbH"
                },
                {
                    "firstname": "Lisa",
                    "lastname": "Kopf",
                    "email": "jobs@cas.de",
                    "title": "Praktikum/Abschlussarbeit Technology Research CAS Aviation ",
                    "description": "Wir sind führender Anbieter von CRM & xRM Software und gestalten mit Customer Centricity innovative Lösungen für die Zukunft. Namhafte Kunden, vielfältige Branchenlösungen und ein hohes Investment in die Potentialentfaltung der Mitarbeiter zeichnen uns aus. Das spiegelt sich in einer hohen Mitarbeiterzufriedenheit wieder. Erlebe die CAS selbst und werde Teil unseres wachsenden Teams aus über 300 Mitarbeitern auf dem CAS Campus. \r\n\r\nHier wird Innovation für dich greifbar – bringe dein Wissen und deine Ideen in einem internationalen Forschungsprojekt mit ein.\r\nPraktikum/Abschlussarbeit Technology Research CAS Aviation \r\n\r\nWas sind deine Aufgaben? \r\nZiel des Projekts ist die Lücke zwischen virtueller Welt (Helikopter-Simulator-Training) und realer Welt (echter Helikopter) durch eine Middleware zu schließen. Dies basiert auf einer Reihe fortgeschrittener Konzepte wie IOT (Internet of Things), EDA (Event driven architecture), SOA und Augmented Reality. Derzeit geht es um folgende Themen:\r\n•\tDu evaluierst geeignete State-of-the-art Technologien aus den Bereichen IOT und SOA zur Realisierung des Projekts.\r\n•\tDu untersuchst relevante Prozesse in der Helikopterherstellung und leitest ein Referenzmodell daraus ab.\r\n•\tDu überträgst entwickelte Architekturen und Modelle auf andere Industriezweige (z.B. Automotive).\r\n•\tDie konkrete Themenstellung erarbeiten wir dann gemeinsam im persönlichen Gespräch. \r\n\r\nWas bringst du mit? \r\n•\tDu studierst Wirtschaftsinformatik, Wirtschaftsingenieurwesen oder einen vergleichbaren Studiengang. \r\n•\tRequirements Engineering und Technology Scouting kennst du bereits theoretisch und möchtest es nun praktisch erleben. \r\n•\tAbhängig vom jeweiligen Aufgabengebiet kennst du dich mit aktuellen Technologien wie z.B. Webservices mit SOAP und REST, HTML5, XML, JSF, JavaScript, iOS/ Android UI Development, Ontologien aus.\r\n•\tGroße Ideen entstehen nicht im stillen Kämmerlein, deshalb solltest du kommunikativ sein.\r\n•\tFür dich ist Teamgeist genauso wichtig wie für uns.\r\n•\tWillst du dein Englisch in der Praxis anwenden? Umso besser!\r\n\r\nWas macht uns besonders?\r\n•\tDer CAS Campus mit Raum für Entfaltung\r\n•\tHelle Büros mit 2-3 Kollegen\r\n•\tVitamine fürs Herz und Koffein für den Kopf\r\n•\tFitnessangebote für Sportskanonen\r\n•\tFlexUrlaub für jede Lebenslage\r\nMach dir dein eigenes Bild unter www.cas-selbst-erleben.de.\r\n\r\nNeugierig?\r\nSende uns deine Unterlagen gerne per E-Mail an jobs@cas.de zu. Wir freuen uns, dich kennen zu lernen. Bei Fragen sind wir für dich da:\r\nLisa Kopf, CAS-Weg 1-5, 76131 Karlsruhe, Tel.: 0721/9638-657.\r\n",
                    "location": "Karlsruhe",
                    "company": "CAS Software AG"
                }
            ];
            return moreOffers;
        }

    };

    global.communicator = {
        getAllOfferTypes: function () {
            return internal.getAllOfferTypes();
        },
        getOffersByType: function (type, limit) {
            return internal.getAllOffersByType(type, limit);
        },
        getMoreOffersByType: function(type, count) {
            return internal.getMoreOffersByType(type, count);
        }
    };
}(window));