angular.
    module('regApp').
    component('userInput', {

        bindings: {
            onAddUser: '&'
        },

        controller: function userInputController($scope, $http) {

            var ctrl = this;

            ctrl.addUser = function (user) {
                var newUser = {
                    name: user.name,
                    sex: user.sex,
                    number: user.number,
                    email: user.email,
                    gitHubAccount: user.gitHubAccount,
                    icon: user.icon
                }
                this.onAddUser({ user: newUser });
            };

            ctrl.submitForm = function (user) {
                if (user.gitHubAccount) {
                    $http({
                        method: 'GET',
                        url: `https://api.github.com/users/${user.gitHubAccount}`
                    }).then(function successCallback(response) {

                        user['icon'] = response.data.avatar_url;
                        ctrl.addUser(user);
                    }, function errorCallback(response) {
                        ctrl.incorrectAccount = true;
                        console.log(error);
                    });
                } else {
                    ctrl.addUser(user);
                }
            };
        },


        template:
        `<form name="userForm" novalidate ng-submit="$ctrl.submitForm(user)">
            <fieldset>
                <legend>Заповніть дані</legend>
                <div class="form-group ">
                    <label>Ім'я:</label>
                    <input required ng-model="user.name" type="text" name="name" class="form-control" />
                    <div ng-show="userForm.$submitted && userForm.name.$invalid" class="validation-message">Заповніть поле, щоб продовжити</div>
                </div>
                <div class="form-group">
                    <label>Стать:</label>
                    <select required name="sex" ng-model="user.sex" class="form-control">
                        <option value="male">Чоловіча</option>
                        <option value="female">Жіноча</option>
                    </select>
                    <div ng-show="userForm.$submitted && userForm.sex.$invalid" class="validation-message">Заповніть поле, щоб продовжити</div>
                </div>
                <div class="form-group">
                    <label>Номер телефону:</label>
                    <input required type="number" ng-model="user.number" name="number" class="form-control" />
                    <div ng-show="userForm.$submitted && userForm.number.$invalid" class="validation-message">Заповніть поле, щоб продовжити</div>
                </div>
                <div class="form-group">
                    <label>Email:</label>
                    <input required ng-model="user.email" type="email" name="email" class="form-control" />
                    <div ng-show="userForm.$submitted && userForm.email.$invalid" class="validation-message">Заповніть поле, щоб продовжити</div>
                </div>
                <div class="form-group form-check">
                    <input ng-model="user.hasGitHub" type="checkbox" class="form-check-input" value="hasGithub" id="hasGithub" />
                    <label class="form-check-label">У мене є Github!</label>
                </div>
                <div ng-show="user.hasGitHub" class="form-group" id="githubAccountBlock">
                    <label>Github акаунт</label>
                    <input required ng-model="user.gitHubAccount" type="text" name="githubAccount" class="form-control" />
                    <div ng-show="userForm.$submitted && user.hasGitHub && userForm.githubAccount.$invalid" class="validation-message">Заповніть поле, щоб продовжити</div>
                    <div ng-show="userForm.$submitted && user.hasGitHub && $ctrl.incorrectAccount" class="validation-message">Не знайдено такого користувача Github. Вкажіть правильний логін або зніміть позначку про наявність аккаунта</div>
                </div>
                <button type="submit">Додати користувача</button>
            </fieldset>
        </form>`
    });
