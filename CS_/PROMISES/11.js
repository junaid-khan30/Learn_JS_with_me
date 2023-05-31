function abc() {
    return new Promise((resolve, reject)=> {
    var counter = 0;
    for (var i = 0; i<=2**32; i++){
        counter++;
    }
    if (counter){
        resolve(counter);
    }else{
        reject("Something Went Wrong");
    }
    });
}

abc()
     .then((output)=>{
        console.log(output);
     })
     .catch((err)=>{
        console.log(err);
     })
console.log(2**3);
console.log(("I am Last"));