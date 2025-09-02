/* 
Boolean Values
Very often, in programming, you will need a data type that can only have one of two values, like

YES / NO
ON / OFF
TRUE / FALSE
For this, JavaScript has a Boolean data type. It can only take the values true or false.
*/
const val = new Boolean(4);
console.log(val);

console.log(Boolean(4<9));


Boolean.prototype.color = function(){
    if(this.valueOf()){
        return "green";
    }
    return "red";
}

let a = false;

console.log(a.color())


const b1 = new Boolean(4);
const b2 = new Boolean(4);

console.log(Boolean(b1 == b2).toString().split("").reverse().join("").split(""))
