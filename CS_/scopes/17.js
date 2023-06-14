function a() {
    return {
        b: () => {
              return {
                c: () =>{
                    console.log("Hello world");
                }
              }
        }
    }
}
a().b().c(); //Hello World  

//This is called object chaining

//the other way of doing this is shown 18.js