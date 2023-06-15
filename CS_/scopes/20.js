const calci = {
    value: 0,
    add: function (num) {
        this.value += num;
        return this;
    },
    product : function(num){
        this.value *= num;
        return this;
    },
    power : function (num){
        this.value **= num;
        return this;
    }
    
}

console.log(calci);
let result = calci.add(5).product(15).power(25).value;
console.log(result);