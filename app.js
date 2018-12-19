var app = angular.module('regApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      template: "<photo-g></photo-g>"
    })
    .when("/users", {
      template: "<user-list users='$ctrl.users'></user-list>"
    })
    .when("/users/:userId", {
      controller: ['user', function(user) {
        console.log(user);
        this.user = user;
      }],
      controllerAs: '$ctrl',
      template: "<user-detail user='$ctrl.user'></user-detail>",
      resolve: {
        user: function ($route, userService) {
          return userService.getUserById($route.current.params.userId);
        }
      }
    })
    .when("/add-user", {
      template: "<user-input on-add-user='$ctrl.addUser(user)'></user-input>"
    })
    .otherwise({
      redirectTo: '/'
    })
})