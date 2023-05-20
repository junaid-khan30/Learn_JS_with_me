/*Analyze the following code block and write the output along with 4-5 lines of reasoning.*/
var mat1 = [[[1, 2], [3, 4, 9, "prash"], [1], [11, 22, 33]], [[1, 2], [3, 4, 9, "prash"], [1], [11, 22, 33]]];
var mat2 = [[0, 1], [2, 2]];
for (var i = 0; i < mat1.length; i++) {
    for (var j = 0; j < mat1[i].length; j++) {
        for (var k = 0; k < mat1[i][j].length; k++) {
            console.log(mat1[i][j][k]);
        }
    }
}
/* The code block defines two variables: mat1 and mat2.
mat1 is a nested array with two levels of nesting. It contains two sub-arrays at the top level, each of which contains four sub-arrays.
The for loop iterates over the elements of mat1 to access each nested array.
The first for loop iterates over the top-level arrays of mat1.
The second for loop iterates over the sub-arrays within each top-level array.
The third for loop iterates over the elements within each sub-array.
The console.log(mat1[i][j][k]) statement prints the value at each level of the nested array structure, resulting in the output of all the individual elements present in mat1.
The output displays the elements 1, 2, 3, 4, 9, "prash", 1, 11, 22, and 33, in the order they are accessed in the nested loops.*/