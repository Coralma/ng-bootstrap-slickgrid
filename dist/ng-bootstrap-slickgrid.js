angular.module('ng-bootstrap-slickgrid', [])
    .directive('slickGrid', ['$timeout','$filter', function ($timeout, $filter) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                name:'@',
                class:'@',
                data: '=',
                columns: '=',
                options: '='
            },
            link: function (scope, element, attrs) {
                $timeout(function(){
                    var grid = new Slick.Grid("#" + scope.name, scope.data, scope.columns, scope.options);
                });
            },
            template:
                "<div id='{{name}}' class='{{class}}'></div>"
        }
    }]);