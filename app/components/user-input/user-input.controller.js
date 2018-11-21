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
    .controller('userInputController', function (githubService) {
        this.user = {
            name: "wer"
        };
        this.incorrectAccount = false;

        this.resetForm = function (form) {
            this.user = {};
            this.incorrectAccount = false;
            form.$setPristine();
            form.$setUntouched();
        }

        this.addUser = function () {
            var newUser = {
                name: this.user.name,
                sex: this.user.sex,
                number: this.user.number,
                email: this.user.email,
                gitHubAccount: this.user.hasGitHub && this.user.gitHubAccount,
                icon: this.user.icon
            }

            this.onAddUser({ user: newUser });
        };

        this.submitForm = function (form) {
            const requiredError = form.$error.required;
            const isGitHubEmpty = requiredError && requiredError.length === 1 && requiredError[0].$name === 'githubAccount';
            if (form.$invalid && !(isGitHubEmpty && !this.user.hasGitHub)) {
                return;
            }

            if (this.user.hasGitHub) {
                githubService.getGitHubAccount(this.user.gitHubAccount)
                    .then((data) => {
                        this.user.icon = data.avatar_url;
                        this.addUser();
                        this.resetForm(form);
                    })
                    .catch((error) => {
                        this.incorrectAccount = true;
                        console.log(error);
                    });
            } else {
                this.addUser();
                this.resetForm(form);
            }
        };
    });
