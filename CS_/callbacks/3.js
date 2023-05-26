var axios = require("axios");
var fs = require("fs/promises");



axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        var users = res.data;
        fs.writeFile("users.json", JSON.stringify(users))
            .then(() => {
                console.log("File user.json is created");
            })
            .catch((err) => {
                console.log(err);
            })

    })
    .catch((err) => {
        console.error("Network issue. Connection Error");
    })
