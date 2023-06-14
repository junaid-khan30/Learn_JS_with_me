//Prototype function or constructor function 
function Bootcamp(fname,age){
    this.fname = fname;
    this.age = age;
    this.location = "Hyderabad";
    this.bio = function (){
        console.log(`${this.fname} is from the Earth and ${this.age} year old`);
    }
}
const student1 = new  Bootcamp("Prash",55); //Instantiation
const student2 = new Bootcamp("Sania",88);
//The process of creating a new object for a constructor function 
console.log(student1,student2);
student1.bio();
student2.bio();

console.log(student2);