const myModule = require("./myModule")
const otherModule = require("./otherModule")


console.log ("Hello World");

function hello(name){
    console.log(`Hello, ${name}`);
}

hello('Mocha');
hello("JC")

console.log(myModule.add(2,2))
console.log(myModule.subtract(5,4))
otherModule.greeting("Sam")