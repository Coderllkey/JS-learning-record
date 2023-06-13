// This is filter function section 

let array = [1,2,3,4,5,6,7,8,9,10];
let oddNumbers = array.filter(num => num%2);
let evenNumbers = array.filter(no => !(no%2));
console.log(array);
console.log(oddNumbers);
console.log(evenNumbers);

// This is filter function section 

let mapArray = [2,3,4,5,6,7,8];
let modifiedMapArray = mapArray.map(no => no+1);
console.log(modifiedMapArray);

// This is map function section 

// Conbining the two method 

let combineArray= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let doCombineArray = combineArray.filter(num => num %2).map(num => num *2);
let anotherCombineArray = combineArray.map(no => no +10).filter(no => !(no %5));
console.log(doCombineArray);
console.log(anotherCombineArray);

// Conbining the two method 



