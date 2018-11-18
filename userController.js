angular.
  module('regApp').
  component('user', {

    bindings: {
      currentUser: '<',
      onDelete: '&'
    },

    controller: function userController($scope) {

      var ctrl = this;

      ctrl.delete = function () {
        ctrl.onDelete({ user: ctrl.currentUser });
      };
    },

    template:    
      `<div class="row">
        <div class="col-3">
          {{$ctrl.currentUser.name}}
        </div>
        <div class="col-2">
          <i class='fas fa-{{$ctrl.currentUser.sex}}'></i>
        </div>
        <div class="col-5 rightSide">
          <div ng-show="$ctrl.currentUser.gitHubAccount">
              <a href='https://github.com/{{$ctrl.currentUser.gitHubAccount}}'>
                  {{$ctrl.currentUser.gitHubAccount}}
              </a>
              <img src='{{$ctrl.currentUser.icon}}'>
          </div>
        </div>
        <div class="col-2">
          <i class='fas fa-times-circle deleteUser' ng-click="$ctrl.delete()"></i>
        </div>
      </div>`
  });
