// alert('Hello world ');
// variables
let age=28;
let year=2020;
console.log(age, year);
age=30; //change of value of variable
console.log(age);
// const
const points=100;
console.log(points);
// old way of variables
var score =75;
console.log(score);

//Strings
console.log('Hello world!');
let email = 'mario@net.com.pl';
console.log(email);
// String concatenation

let firstName = 'Norbert';
let lastName = 'Krzeminski';
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters

console.log(fullName[0]); // looks like array

// String length
console.log(fullName.length);
// String method
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);
let index = email.indexOf('@'); //index mean position of some character
console.log(index);
// common string methods
let email2 = 'mario2@net.com.pl'
// let result2 =email2.lastIndexOf('n');
// let result2 =  email2.slice(0,6);
// let result2 = email2.substr(0,5);
// let result2 = email2.replace('m','w');
let result2 = email2.replace('n','l');
console.log(result2);
// Numbers

let radius = 10;
const pi = 3.14;
console.log(radius, pi);
//math operations +, -, *, /, **, %
// console.log(10/5);
// let result3 = radius%3;
// let result3 = pi * radius**2;

// console.log(result3);
// let likes = 10;
// likes++;
// likes--;
// likes+=10;
// console.log(likes);
//Not a Number - NaN
console.log(5/'hello');
// let result3 = 'the blog has ' + likes + " likes";
//string template
const tittle = 'Best reads of 2020';
const author = 'Mario';
const likes = 30;
//concatenation way
// let result4 = 'The blog called ' + tittle + 'by ' + author + ' has ' + likes + ' likes';
// console.log(result4);
//template way
let result4 = `The blog called ${tittle} by ${author} has ${likes} likes`;
console.log(result4);
// creating html template
let html = `
    <h2>${tittle}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes.</span>
`;
console.log(html);
//arrays
let ninjas = ['shaun','ryu', 'hun-li'];
// ninjas[1] = 'ken';
// console.log(ninjas[1]);
// let ages = [20,25,30,35];
// console.log(ages[2]);
// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);
console.log(ninjas.length);
// array methods
// let resultArray = ninjas.join(',');
// let resultArray = ninjas.indexOf('shaun');
// let resultArray = ninjas.concat(['ken', 'crystal']);
let resultArray = ninjas.push('ken');
resultArray = ninjas.pop();
console.log(resultArray);
//NULL
let newAge = null;
console.log(newAge, newAge + 3, `The age is ${newAge}` );

// type conversion
score = '100';
console.log(typeof score);
score = Number(score);
console.log(score + 1);
console.log(typeof score);

// for loops
// for(let i=0; i<5;i++){
//     console.log('in loop: ', i)
// }
// console.log('loop finished')

const anotherNames = ['mario', 'luigi' ,'toad'];
// for(let i=0; i < anotherNames.length; i++){
//     // console.log(anotherNames[i]);
//     let html = `<div>${anotherNames[i]}</div>`
//     console.log(html)
// }
// while loops
// let i = 0
// while(i<5){
// console.log('in loop ', i);
// i++;
// }
// while(i<anotherNames.length){
//     console.log(anotherNames[i]);
//     i++;
// }
// do while loops
let i = 5;
do {
    console.log('The value of i is', i);
    i++;
    }
while(i<5);
// if statements
// const ifAge = 25;
// if(ifAge>20){
//     console.log('You are over 20 years old');
// }

// const newNinjas = ['shaun','ryu', 'hun-li', 'yoshi'];
// if(newNinjas.length>3){
//     console.log("that's a lot of ninjas")
// }

const password = 'p@ssword1234';
if(password.length >=12){
    console.log("it's strong password")
} else  if(password.length >= 8){
    console.log("that password is long enough!");
} else {
    console.log('password is to short')
}