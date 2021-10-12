console.log('Hello World');
const place = "World";
const greeting = "Hello";
console.log(`${greeting}, ${place}`);
console.log('%s, %s', greeting, place);
let bool1 = true;


const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const person = {
    firstName: "Aaron",
    lastName: "Powell"
};

function sayHello(person) {
    console.log(`Hello ${person.firstName}`);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);


function reverseString(value) {
    let reversedValue = "";

    value.split("").forEach((caracter) => {
        reversedValue = caracter + reversedValue;    
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me"));
console.log (`1 + 1 is ${1 + 1}`);
console.log(`The opposite of true is ${!bool1}`);


let num1 = '150';

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC'));
console.log(parseInt('0xF'));

let num2 = '150';
let flo1 = '1.50';

console.log(num2.toString());
console.log(flo1.toString());
console.log((100).toString());

console.log(parseInt(`${1 + 1}`));

try
{
    throw 'myException';
    //throw true;
}
catch(ex)
{
    console.error('excepcion capturada:' + ex);
   
}
finally
{
    console.error('this code is always executed');
}

