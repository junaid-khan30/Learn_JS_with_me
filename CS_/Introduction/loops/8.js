for (let i = 0; i < 5; i++) {
    console.log(i);
}


let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}
// Output: 0 1 2 3 4


for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}
// Output: 0 1 3 4
