function Person(fname){
    console.log(this);
}
const obj = {
    key : function () {
        console.log(this);
    }
}
console.log(this);//{}
Person("prash");// global object 
obj.key();//key 