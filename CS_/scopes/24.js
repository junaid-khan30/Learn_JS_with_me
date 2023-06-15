var a = 10;
{
    {
        console.log(a);
        var a = 11;
        
        
    }
   
    console.log(a);
    var a = 55;
    
}
console.log(a);