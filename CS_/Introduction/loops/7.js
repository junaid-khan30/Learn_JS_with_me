// Question 1: Calculate the factorial of a given number using a while loop.

function calculateFactorial(num) {
    let factorial = 1;
    let i = 1;
  
    while (i <= num) {
      factorial *= i;
      i++;
    }
  
    return factorial;
  }
  
  console.log("Factorial of 5:", calculateFactorial(5)); so     