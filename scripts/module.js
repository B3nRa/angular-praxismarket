var encryptedPassword = "xQMwatX6djp1dA_CS2PZly16LJN8P8gSrqMSpCsjTP-mxaw95OhmZQ";
var base64Auth = "bXVoZTEwMTU6eFFNd2F0WDZkanAxZEFfQ1MyUFpseTE2TEpOOFA4Z1NycU1TcENzalRQLW14YXc5NU9obVpR";

angular.module('praxismarket', ['ngMaterial'])
    .factory('Base64', function () {
        var keyStr = 'ABCDEFGHIJKLMNOP' +
            'QRSTUVWXYZabcdef' +
            'ghijklmnopqrstuv' +
            'wxyz0123456789+/' +
            '=';
        return {
            encode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                do {
                    chr1 = input.charCodeAt(i++);
                    chr2 = input.charCodeAt(i++);
                    chr3 = input.charCodeAt(i++);

                    enc1 = chr1 >> 2;
                    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                    enc4 = chr3 & 63;

                    if (isNaN(chr2)) {
                        enc3 = enc4 = 64;
                    } else if (isNaN(chr3)) {
                        enc4 = 64;
                    }

                    output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";
                } while (i < input.length);

                return output;
            },

            decode: function (input) {
                var output = "";
                var chr1, chr2, chr3 = "";
                var enc1, enc2, enc3, enc4 = "";
                var i = 0;

                // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
                var base64test = /[^A-Za-z0-9\+\/\=]/g;
                if (base64test.exec(input)) {
                    alert("There were invalid base64 characters in the input text.\n" +
                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
                    "Expect errors in decoding.");
                }
                input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

                do {
                    enc1 = keyStr.indexOf(input.charAt(i++));
                    enc2 = keyStr.indexOf(input.charAt(i++));
                    enc3 = keyStr.indexOf(input.charAt(i++));
                    enc4 = keyStr.indexOf(input.charAt(i++));

                    chr1 = (enc1 << 2) | (enc2 >> 4);
                    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                    chr3 = ((enc3 & 3) << 6) | enc4;

                    output = output + String.fromCharCode(chr1);

                    if (enc3 != 64) {
                        output = output + String.fromCharCode(chr2);
                    }
                    if (enc4 != 64) {
                        output = output + String.fromCharCode(chr3);
                    }

                    chr1 = chr2 = chr3 = "";
                    enc1 = enc2 = enc3 = enc4 = "";

                } while (i < input.length);

                return output;
            }
        }
    }
)
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
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log, $http, Base64) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };

        //$http.defaults.headers.common['Authorization'] = 'Basic ' + "bXVoZTEwMTU6eFFNd2F0WDZkanAxZEFfQ1MyUFpseTE2TEpOOFA4Z1NycU1TcENzalRQLW14YXc5NU9obVpR";
        $http({method: 'GET', url: 'http://www.iwi.hs-karlsruhe.de/Intranetaccess/REST/joboffer/offertypes/all'})
            //.then(function (response) {
            //    console.log("foo");
            //    window.datafoo = response;
            //    $scope.offertTypes = response.data;
            //})
    })
    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('orange');
    });

