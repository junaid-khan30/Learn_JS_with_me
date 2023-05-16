setTimeout(() => {
    console.log("I am First");
}, 1000);
setTimeout(() => {
    console.log("I am Second");
}, 1500);
setTimeout(() => {
    console.log("I am Third");
}, 3500);
setTimeout(() => {
    console.log("I am Just Getting Started with Adv. JS");
    setTimeout(() => {
        console.log("I am Just Getting Started again");
    }, 5000);
}, 2000);