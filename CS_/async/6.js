setTimeout(function () {
    console.log("Hello Hell");
    setTimeout(function () {
        console.log("Hello Hell Number 2");
    }, 5000);
    setTimeout(function () {
        console.log("Hello Hell Number 3");
    }, 2000);
}, 15000);