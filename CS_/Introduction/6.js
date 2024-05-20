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
  


  //FETCH API
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


  //ASYNC AWAIT
  async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchData();
  