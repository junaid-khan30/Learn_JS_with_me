var input = 'Hello there';
var splitStr = input.split('');
var even = '';
var odd = '';
for (var i = 0; i < splitStr.length; i++) {
    if (i % 2 == 0) {
        even += splitStr[i];
    } else {
        odd += splitStr[i];
    }
}
even = '000' + even + '111';
odd = '000' + odd + '111';
console.log(even);
console.log(odd);

