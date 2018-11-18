angular.
  module('regApp').
  component('userList', {

    controller: function userListController($scope) {

      var ctrl = this;

      ctrl.addUser = function (user) {
        this.users.push(user);
      }

      ctrl.deleteUser = function (user) {
        var id = ctrl.users.indexOf(user);
        if (id >= 0) {
          ctrl.users.splice(id, 1);
        }
      };

      ctrl.users = [];

    },

    template:

      `<div class="container">
        <div class="row">
          <div class="col-md-6 col-12 ">
              <div class="header">Користувачі</div>
              <div ng-show="$ctrl.users.length === 0">У системі немає користувачів</div>
              <div class="userList"
                   ng-repeat="user in $ctrl.users">
                  <user current-user="user" 
                        on-delete="$ctrl.deleteUser(user)"
                  ></user>
              </div>
          </div>
          <user-input class="col-md-6 col-12" 
                      on-add-user="$ctrl.addUser(user)"
          ></user-input>
        </div>
      </div>`
  });
