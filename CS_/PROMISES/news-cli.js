var axios = require("axios");
var readlineSync = require("readline-sync");
var fs = require("fs/promises");
var api_key = "484a66d557604e0182eae8bbb89b1796"; //hanzala-key

function main() {
    var topic = readlineSync.question("Enter your topic name : ");
    fetchNews(topic)
        .then((res) => {
            var articles = res.data.articles;
            var fileNames = [];
            var fscallbacks = [];
            for (var i = 0; i < articles.length; i++) {
                var fileName = articles[i].source.name.split(" ").join("") + ".txt";
                if (fileNames.includes(fileName)) {
                    continue;
                }
                fileNames.push(fileName);
                var title = articles[i].title;
                var author = articles[i].author;
                var description = articles[i].description;
                var content = articles[i].content;
                var url = articles[i].url;
                var data = `${title} \n\n${author} \n\n${description}\n\n${content}\n\n${url}`;
                fscallbacks.push(fs.writeFile(`news_files/${fileName}`, data.toString()));
            }
            Promise.all(fscallbacks)
                .then((responses) => {
                    for (var i = 0; i < responses.length; i++) {
                        console.log(fileNames[i] + " has been created");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
}
main();



function fetchNews(topic) {
    return axios.get(`https://newsapi.org/v2/everything?q=${topic}&from=2023-05-02&sortBy=publishedAt&apiKey=${api_key}`);
}