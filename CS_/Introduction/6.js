console.log("Hello, World!");


function add(a, b) {
    return a + b;
  }
  
  let result = add(3, 4);
  console.log(result); // Output: 7
  

  //manipulating DOM 
  document.getElementById("myElement").textContent = "New text content";


  //eVENT LISTENER
  document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
  });
  