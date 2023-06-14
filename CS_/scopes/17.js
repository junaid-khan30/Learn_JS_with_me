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