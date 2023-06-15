let a = 10;
{
    {
        let a = 11;
        console.log(a);
    }
    let a = 55;
    console.log(a);
}
console.log(a);