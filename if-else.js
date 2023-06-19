if (false){
    console.log("this is the true");
}
else{
    console.log("this is the false");
}


let List = [
    {name: 'kyaw',
     age : 32,
     ticket: null},
     {name: 'khaine',
     age : 22,
     ticket: null},
     {name: 'Htun',
     age : 12,
     ticket: null},
     {name: 'Nyan',
     age : 18,
     ticket: null},
     {name: 'Naing',
     age : 17,
     ticket: null},
];

let mapList = List.map(obj => {
    if( obj.age >= 18){
        obj.ticket = true;
    }else{
        obj.ticket = false;
    }
    return obj;
});
console.table(mapList);

// coding challange

let challangeArray =[
{
    name: "Susan",
    gender : "f"
},
{
    name: "Kya",
    gender : "m"
},
{
    name: "Nike",
    gender : "m"
},
{
    name: "Katara",
    gender : "f"
},
{
    name: "Sasuke",
    gender : "m"
},

];

let mapchallengeArray = challangeArray.map( person => {
    if (person.gender == "f"){
        person.gender ="Female";
    }else{
        person.gender = "Male";
    }
    return person;
});
console.table(mapchallengeArray);

// coding challange
