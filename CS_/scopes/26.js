for (let i=0; i<=5; i++){
    console.log(i);
}
for(; i<=10; i++){
    console.log(i);
}
//let in the first loop is limited to that loop only so another loop doesn't have defined value of i
//If you use var instead of let , the value of i will be continues from 6