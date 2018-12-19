angular.
    module('regApp').
    service('userService', function () {
        this.users = []
        this.addUser = function (user) {
            this.users.push(user);
        }

        this.getUserById = function (userId) {

            return this.users.find(x => x.id === userId);
        }

    });