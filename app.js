var app = angular.module('regApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      template: "<photo-g></photo-g>"
    })
     .when("/users", {
      template: "<user-list users='$ctrl.users'></user-list>"
    })
    .when("/users/:userId", {
      template: "<user-detail></user-detail>",
      resolve: {
        user: function($routeParams, userService){
            return userService.getUserById($routeParams.userId);
    }}
    })
    .when("/add-user", {
      template: "<user-input on-add-user='$ctrl.addUser(user)'></user-input>"
    }) 
     .otherwise({
      redirectTo: '/'
    }) 
  })