//Prototype function or constructor function 
function Bootcamp(fname,age){
    this.fname = fname;
    this.age = age;
    this.location = "Hyderabad"
}
const student1 = new  Bootcamp("Prash",55); //Instantiation
const student2 = new Bootcamp("Sania",88);
//The process of creating a new object for a constructor function 
console.log(student1,student2);
