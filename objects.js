// Creating Simple Object 

let Obj = {
    name: "Nick",
    age: 23,
    job: "WEB developer",
    address : "YGN"
}
console.log(Obj.name);

Obj.name = "Nicole";
console.log(Obj);
Obj.address = "Mdy";
console.log(Obj.address);

// Creating Simple Object 

// Object in Array 

let objInArray = [
    {
        name: "Nick",
        age: 23,
        job: "WEB developer",
        address : "YGN"
    },
    {
        name: "Jack",
        age: 21,
        job: "WEB designer",
        address : "YGN"
    },
    {
        name: "John",
        age: 33,
        job: "WEB engineer",
        address : "MDY"
    }

];
console.log(objInArray);
console.log(objInArray[0]);
console.log(objInArray[2].job);

// Object in Array 


// using methods in Objects 

let thirdArray = [
{
    name:"tun",
    age: 3,
    address: "ygn"
},
{
    name:"nyan",
    age: 4,
    address: "ygn"
},
{
    name:"lin",
    age: 6,
    address: "ygn"
},
{
    name:"zayar",
    age: 6,
    address: "ygn"
}
];
let names = thirdArray.map( one => one.name);
console.log(names);
let calculate = thirdArray.filter(one => one.age >= 4);
console.log(calculate);
// using methods in Objects 

// dealing with Strings 

let string = "     this is a string    ";
console.log(`hello ${string}`);  //use this to make a var in string

let bigString = string.toUpperCase();
console.log(bigString);
let littleString = string.toLowerCase();
console.log(littleString);

let substringed = string.substring(0,12);
console.log(substringed);
let trimedStr = string.trim();
console.log(string.trim());   // to trim down the spaces

let mkArray = string.split("");
console.log(mkArray.length);




// dealing with Strings 





