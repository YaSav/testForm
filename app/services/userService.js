angular.
    module('regApp').
    service('userService', function () {
        this.users = []

        this.users.push({
            name:"1", 
            sex: "male",
            id: "qwe123",
            email: "qwe",
            number: "(063)5994919"
        });

        this.users.push({
            name:"zxc", 
            sex: "male",
            id: "qweqweqwe",
            email: "qwe",
            number: "+38(063)-599-4919"
        });

        this.users.push({
            name:"1",
            sex: "female",
            id: "qwe2222",
            gitHubAccount: "yasav",
            icon: "https://avatars1.githubusercontent.com/u/12753696?v=4",
            email: "qwe",
            number: "0635994919"
        });
        
        this.addUser = function (user) {
            this.users.push(user);
        }

        this.getUserById = function (userId) {
            return this.users.find(x => x.id === userId);
        }

        this.getUsers = function () {
            return this.users;
        }

    });