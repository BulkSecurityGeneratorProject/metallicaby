'use strict';

angular.module('metallicaApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
