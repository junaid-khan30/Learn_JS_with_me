import axios from "axios";
// var axios = require("axios");
import readlineSync from "readline-sync";
// var readlineSync = require("readline-sync");
import fs from "fs/promises";
// var fs = require("fs/promises");
import terminalImage from "terminal-image";
async function main() {
    try {
        var username = readlineSync.question("Enter your github username : ");
        var res = await axios.get(`https://api.github.com/users/${username}`);
        var profile_pic_url = res.data.avatar_url;
        var res2 = await axios.get(profile_pic_url, {
            responseType: 'arraybuffer'
        });
        await fs.writeFile(`${username}.png`, res2.data);
        var imageBuffer = await terminalImage.file(`${username}.png`, {width : '50%', height : "50%"});
        console.log(imageBuffer);
    } catch (error) {
        console.log("Invalid GitHub Username/Server issue");
    }
}
main();