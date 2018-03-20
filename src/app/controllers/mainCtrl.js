angular.module('app').controller('mainCtrl', function($scope){
    $scope.friends = [
        {
            name: 'scooby',
            age: 5
        },
        {
            name: 'shaggy',
            age: 21
        },
        {
            name: 'Marlon Waynes',
            age: 34
        }
    ];
    $scope.opts = [
        'name',
        'age'
    ]
    $scope.directions = [
        {
            name: 'Asc',
            value: '+'
        },
        {
            name: 'Desc',
            value: '-'
        }
    ]
})