var app = angular.module('expensesApp', []);

app.controller('ExpensesViewController', ['$scope', function($scope){
    $scope.person = {
        name: 'Carl',
        age: 21
    }

    $scope.phrase = 'Like those apples?';

    $scope.increaseAge = function () {
        $scope.person.age++;
    }

    $scope.items = [
        {
            name: 'ZX Spectrum',
            features: [ 'cheap', 'easy to use', 'collectable', 'retro vintage']
        },
        {
            name: 'Pandoras Key',
            features: [ '1000 Games', 'easy to use', 'Excellent value', 'retro vintage']
        }
    ];
}]);