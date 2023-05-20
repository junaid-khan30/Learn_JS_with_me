/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var data = ["nehra", "prash", "adnan", "sleep", "BENJAMIN", "MSDhoni", "Kohli"];
console.log(data);
for (var i = 0; i < data.length; i++) {
    data[i] = (data[i][0].toUpperCase() + data[i].substring(1).toLowerCase());
}
console.log(data);
/*The code block initializes an array called data with several string elements.
The initial array data is displayed using console.log(), resulting in the output: ["nehra", "prash", "adnan", "sleep", "BENJAMIN", "MSDhoni", "Kohli"].
The code then enters a for loop that iterates over each element in the data array.
Inside the loop, the current element of data is modified by concatenating the following:
The first character of the element, converted to uppercase using toUpperCase().
The remaining characters of the element, converted to lowercase using substring(1).toLowerCase().
The modified string is assigned back to the current element in the data array, replacing the original value.
After the loop completes for each element, the updated data array is displayed using console.log(), resulting in the output: ["Nehra", "Prash", "Adnan", "Sleep", "Benjamin", "Msdhoni", "Kohli"]. */