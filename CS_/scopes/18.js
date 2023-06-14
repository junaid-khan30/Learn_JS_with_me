function a(){
    return { b }
}

function b() {
    return { c }
}

function c() {
    console.log("Hello world");
}

a().b().c(); //Hello World
//Currying in Javascipt 