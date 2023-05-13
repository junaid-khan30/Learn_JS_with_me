function getUser() {
    setTimeout(function () {
        var userids = [10, 20, 30, 40];
        console.log(userids);
        setTimeout(function (id) {
            var user = {
                name: 'John Doe',
                age: 25
            };
            console.log(`User ID : ${id} : User name : ${user.name}, User Age: ${user.age}`);
            setTimeout(function (age) {
                console.log(user);
            }, 1000, user.age);
        }, 1000, userids[3]);
    }, 1500)
}
getUser();