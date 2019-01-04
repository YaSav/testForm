angular
    .module('regApp')
    .component('userInput', {
        bindings: {
            onAddUser: '&'
        },
        controller: 'userInputController',
        controllerAs: '$ctrl',
        templateUrl: './app/components/user-input/user-input.tpl.html'
    })
    .controller('userInputController', function ($location, githubService) {
        this.user = {};
        this.incorrectAccount = false;

        this.resetForm = function (form) {
            this.user = {};
            this.incorrectAccount = false;
            form.$setPristine();
            form.$setUntouched();
            $location.path("/users");
        }

        this.addUser = function () {
            const { user } = this;

            user.id = `${user.name}${(new Date()).getTime()}`
            this.onAddUser({ user });
        };

        this.submitForm = function (form) {
            if (form.$invalid) {
                return;
            }

            if (this.user.hasGitHub) {
                githubService.getGitHubAccount(this.user.gitHubAccount)
                    .then(data => {
                        this.user.icon = data.avatar_url;
                        this.addUser();
                        this.resetForm(form);

                    })
                    .catch((error) => {
                        this.incorrectAccount = true;
                        console.log(error);
                    });
            } else {
                this.user.gitHubAccount = '';
                this.addUser();
                this.resetForm(form);
            }
        };
    });
