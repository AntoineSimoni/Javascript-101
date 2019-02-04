'use strict';


let usernamme;
usename = "Jeremy";
username = "Toto";
username = "Tata";
username = 3;

const userStatus = 1;


let myString = "Hello";
let myString2 = "Hello";
let myString3 = `
    Hello
`;

let myNumber = 1.5;
let myBoolean = true;
let myUndefined = undefined;
let myNull = null;

console.log("Hello"+ "World");
const str1 = "Hello";
const str2 = "World";
console.log(`${str1} ${str2}`);




let a = 10 + 32;
a += 8;
console.log("a", a);


let b = 10 - 5;
b -= 8;
console.log("b", b);

let c = 5;
// c++; // c = c+1
console.log(c++);
console.log(c);


console.log([1, 2, 3] * 3);

console.log(+"3");
console.log(+true);

console.log(3 + 4 +"7"); // "77"
console.log("3"+ 4 + 7);

/*

=
>
>=
<
<=
===
!==

*/

console.log("2 > 1", 2 > 1);

console.log("2 < 1", 2 < 1);

console.log("20 >=10", 20 >= 10);

console.log("10 >= 20", 10 >= 20);

console.log(4 != "4");

console.log(4 !== "4") // true


// & = et 
// || = ou


let isPrivate = false;
let isMember = false;

if (isPrivate === false || (isPrivate === true && isMember === true)) {  // si ce n'est pas privé ou que c'est privé et que son utilisateur est membre
    console.log("can see the group");
} else {
    console.log("can't see the group");
}



const today = "lundi";
if (today === "lundi") {
    console.log(`Aujourd'hui on est ${today}`);
} else if (today === "mardi"){
    console.log(`Aujourd'hui on est ${today}`);
} else if(today === "mercredi"){
    console.log(`Aujourd'hui on est ${today}`);
} else if(today === "jeudi"){
    console.log(`Aujourd'hui on est ${today}`);
} else if(today === "vendredi "){
    console.log(`Aujourd'hui on est ${today}`);
} else if(today === "samedi "){
    console.log(`Aujourd'hui on est ${today}`);
} else if(today === "dimanche"){
    console.log(`Aujourd'hui on est ${today}`);
}


switch (today) {
    case "lundi":
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case "mardi":
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case "mercredi":
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case "jeudi":
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case "vendredi":
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case "samedi":
    console.log(`Aujourd'hui on est ${today}`);
    break;
    case "dimanche":
    console.log(`Aujourd'hui on est ${today}`);
    break;
}

let username = prompt("What is your name");
console.log("username", username);


if (username){
    alert(`Nice to meet you ${username}`);
} else{
    alert (`Don't be shy!`);
}


username !== null ?
    alert(`Nice to meet you ${username}`) :
    alert(`Don't be shy!`);



function myFunc(){
    console.log("Hello World")
}
console.log("myFunc", myFunc());

const myFunc2 = () => {

    return "Hello World"
}
console.log("myFunc2", myFunc2());

const sum = (p1,p2) =>{
    return p1 + p2;
}
console.log(sum(4, 10));

const truncate =(str, length, trail) => {
    if (str.length > length) {
        str.substring(0, length) + trail
} else {
    return str
}
}

const res1 = truncate("I will be truncated", 15, "->"); // I will be trunc ->
console.log("res1", res1);
const res2 = truncate("I will be truncated", 10);
console.log("res1", res2);
const res3 = truncate("I will be truncated", 15);
console.log("res1", res3);

const myArray =[1, "hello", [1, 2, [3, 4, 5, [6, 7, 8]]]]




const arr = [0, 1, 2, 3, 4, 5];
arr.map(x => {
    console.log("x", x);
    return x/2;
})

let res = [];
arr.forEach(num => {
    console.log("num", num)
    res.push(num/2);
})
console.log("res", res);

/*
const myArr = [1, 2, 3];
const myArr2 = myArr;
myArr2[0] = 0;
console.log(myArr)
console.log(myArr2)
*/

//const myArr = [1, 2, 3];
//const myArr2 = [...myArr];

const user = {
    id: 1,
    name: "Jeremy",
    email: "email@email.com",
    car: {
        color:"red"
    },
    test: [1, 2, 3],
}

console.log(user.id);

console.log(user["id"]);
console.log(user.car.color);
console.log(user["car"].color);

const myProp = "car";
console.log(user[myProp].color);

const cart = [
    {item: "a", price: 2, quantity: 1},
    {item: "b", price: 3, quantity: 1},
    {item: "c", price: 4, quantity: 1}
];

const res = cart.reduce((acc,curVal) => {
    console.log("acc", acc);
    console.log("curVal", curVal);
    return acc += curVal.price * curVal.quantity
}, 0);

console.log("res", res)