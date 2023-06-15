var a = 23;
{
    //const a = 99;
    console.log(a);
    {
        var a = 11;
        console.log(++a);
    }
}
{
    const a = 10;
    console.log(a);
}
console.log(a);

//