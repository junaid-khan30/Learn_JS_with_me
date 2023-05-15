var data = {
    address: {
        street : "HSR Layout",
        pincodes : 515761,
        city : "Banglore",
        marks : [10,20,30,40,50]
    },
    date: "May 4th, 2023",
    bio : function(){
        console.log("I am a free Man.");
    },
    avgMarks: function(marks){
        var sum = 0;
        for(var i=0; i<marks.length; i++){
            sum += marks[i];
            
        }return sum / marks.length;
    }
}
console.log(data);

//KEY TAKEAWAYS:
//1)You can have function as value within an object ()
//you can have another object as value within an object 
//you can have array,Number,String as value within an object

//if i want  only address
console.log(data.address);
//if you want only city
console.log(data.avgMarks(data.address.marks));

