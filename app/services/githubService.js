angular.
    module('regApp').
    service('githubService', function($http) {

        this.getGitHubAccount = function(userLogin) {

            return $http.get(`https://api.github.com/users/${userLogin}`)
                .then(function(response) {
                    return response.data;
                })
        }

    });
