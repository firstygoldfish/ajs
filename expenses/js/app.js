var app = angular.module('expensesApp', ['ngRoute']);
app.run(function($rootScope) {
  $rootScope.apptitle = 'Expenses Application';
});

//app.controller('ExpensesViewController', ['$scope', function ($scope) {
//  
//}])

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses', {
      templateUrl: 'views/expenses.html',
      controller: 'ExpensesViewController'
    })
    .when('/expenses/new', {
      templateUrl: 'views/expenseForm.html',
      controller: 'ExpenseViewController'
    })
    .when('/expenses/edit/:id', {
      templateUrl: 'views/expenseForm.html',
      controller: 'ExpenseViewController'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('ExpensesViewController', ['$scope', function ($scope) {
  $scope.expenses = [
    {description: 'Food', amount: 10, date: '2020-02-02'},
    {description: 'Computer', amount: 1000, date: '2020-02-05'},
    {description: 'Clothes', amount: 80, date: '2020-02-02'},
    {description: 'Entertainment', amount: 100, date: '2020-02-03'},
    {description: 'Food', amount: 15, date: '2020-02-03'}
  ];
}]);

app.controller('ExpenseViewController', ['$scope', '$routeParams', function ($scope, $routeParams) {
  $scope.sometext = 'This will be the new page';
  $scope.id = $routeParams.id;
}]);