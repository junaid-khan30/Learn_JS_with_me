let a = 10;
{
    let a = 99;
    console.log(a);
    {
        let a = 11;
        console.log(a);
    }
}
console.log(a);
//hoisting