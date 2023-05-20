/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var data = ["nehra", "prash", "adnan", "sleep", "BENJAMIN", "MSDhoni", "Kohli"];
console.log(data);
for (var i = 0; i < data.length; i++) {
    var temp = "";
    for (var j = 0; j < data[i].length; j++) {
        if (j == 0) {
            temp += data[i][j].toUpperCase();
        } else {
            temp += data[i][j].toLowerCase();
        }
    }
    data[i] = temp;
}
console.log(data);
/*The code block initializes an array called data with several string elements.
The initial array data is displayed using console.log(), resulting in the output: ["nehra", "prash", "adnan", "sleep", "BENJAMIN", "MSDhoni", "Kohli"].
The code then enters a for loop that iterates over each element in the data array.
Inside the loop, a new empty string variable temp is declared.
Another for loop is used to iterate over each character in the current element of data.
Inside the inner loop, an if statement is used to check if the current character index j is 0.
If j is 0, the character is converted to uppercase using toUpperCase() and added to the temp string.
If j is not 0, the character is converted to lowercase using toLowerCase() and added to the temp string.
After the inner loop completes for each element, the current element in the data array is updated with the modified temp string.
Finally, the updated data array is displayed using console.log(), resulting in the output: ["Nehra", "Prash", "Adnan", "Sleep", "Benjamin", "Msdhoni", "Kohli"]. */