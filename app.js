var app = angular.module('regApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl: "index.html"
    })
    .when("/list", {
      templateUrl: "app/components/user-list/user-list.tpl.html"
    })
    .when("/add-user", {
      template: "<user-input on-add-user='$ctrl.addUser(user)'></user-input>"
    })
    .otherwise({
      redirectTo: '/'
    })
  })