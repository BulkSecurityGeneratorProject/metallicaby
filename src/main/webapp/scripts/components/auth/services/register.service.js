'use strict';

angular.module('metallicaApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


