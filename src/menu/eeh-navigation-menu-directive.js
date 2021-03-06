'use strict';

/**
 * @ngdoc directive
 * @name eeh-navigation-menu
 * @restrict AE
 *
 * @description
 * This directive allows for the creation of a framework-agnostic menu.
 * It is possible to add a directive that adds behavior to, or otherwise manipulates, this directive.
 * Third party jQuery menu plugins, such as Superfish and MetisMenu, can easily be used to style and add behavior to the
 * menu that this directive generates.
 *
 * @param {string} menuName Sets the name of the menu that the directive will render.
 */
var ListDirective = function (eehNavigation) {
    return {
        restrict: 'AE',
        templateUrl: 'template/eeh-navigation/menu/eeh-navigation-menu.html',
        scope: {
            menuName: '='
        },
        link: function (scope) {
            scope.iconBaseClass = function () {
                return eehNavigation.iconBaseClass();
            };

            scope.$watch(eehNavigation.menuItems, function () {
                if (angular.isUndefined(scope.menuName)) {
                    return;
                }
                scope.menuItems = eehNavigation.menuItemTree(scope.menuName);
            });
        }
    };
};

angular.module('eehNavigation').directive('eehNavigationList', ListDirective);
