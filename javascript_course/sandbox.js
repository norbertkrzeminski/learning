// // alert('Hello world ');
// // variables
// let age=28;
// let year=2020;
// console.log(age, year);
// age=30; //change of value of variable
// console.log(age);
// // const
// const points=100;
// console.log(points);
// // old way of variables
// var score =75;
// console.log(score);

// //Strings
// console.log('Hello world!');
// let email = 'mario@net.com.pl';
// console.log(email);
// // String concatenation

// let firstName = 'Norbert';
// let lastName = 'Krzeminski';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// //getting characters

// console.log(fullName[0]); // looks like array

// // String length
// console.log(fullName.length);
// // String method
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result);
// let index = email.indexOf('@'); //index mean position of some character
// console.log(index);
// // common string methods
// let email2 = 'mario2@net.com.pl'
// // let result2 =email2.lastIndexOf('n');
// // let result2 =  email2.slice(0,6);
// // let result2 = email2.substr(0,5);
// // let result2 = email2.replace('m','w');
// let result2 = email2.replace('n','l');
// console.log(result2);
// // Numbers

// let radius = 10;
// const pi = 3.14;
// console.log(radius, pi);
// //math operations +, -, *, /, **, %
// // console.log(10/5);
// // let result3 = radius%3;
// // let result3 = pi * radius**2;

// // console.log(result3);
// // let likes = 10;
// // likes++;
// // likes--;
// // likes+=10;
// // console.log(likes);
// //Not a Number - NaN
// console.log(5/'hello');
// // let result3 = 'the blog has ' + likes + " likes";
// //string template
// const tittle = 'Best reads of 2020';
// const author = 'Mario';
// const likes = 30;
// //concatenation way
// // let result4 = 'The blog called ' + tittle + 'by ' + author + ' has ' + likes + ' likes';
// // console.log(result4);
// //template way
// let result4 = `The blog called ${tittle} by ${author} has ${likes} likes`;
// console.log(result4);
// // creating html template
// let html = `
//     <h2>${tittle}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes.</span>
// `;
// console.log(html);
// //arrays
// let ninjas = ['shaun','ryu', 'hun-li'];
// // ninjas[1] = 'ken';
// // console.log(ninjas[1]);
// // let ages = [20,25,30,35];
// // console.log(ages[2]);
// // let random = ['shaun', 'crystal', 30, 20];
// // console.log(random);
// console.log(ninjas.length);
// // array methods
// // let resultArray = ninjas.join(',');
// // let resultArray = ninjas.indexOf('shaun');
// // let resultArray = ninjas.concat(['ken', 'crystal']);
// let resultArray = ninjas.push('ken');
// resultArray = ninjas.pop();
// console.log(resultArray);
// //NULL
// let newAge = null;
// console.log(newAge, newAge + 3, `The age is ${newAge}` );

// // type conversion
// score = '100';
// console.log(typeof score);
// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

// // for loops
// // for(let i=0; i<5;i++){
// //     console.log('in loop: ', i)
// // }
// // console.log('loop finished')

// const anotherNames = ['mario', 'luigi' ,'toad'];
// // for(let i=0; i < anotherNames.length; i++){
// //     // console.log(anotherNames[i]);
// //     let html = `<div>${anotherNames[i]}</div>`
// //     console.log(html)
// // }
// // while loops
// // let i = 0
// // while(i<5){
// // console.log('in loop ', i);
// // i++;
// // }
// // while(i<anotherNames.length){
// //     console.log(anotherNames[i]);
// //     i++;
// // }
// // do while loops
// let i = 5;
// do {
//     console.log('The value of i is', i);
//     i++;
//     }
// while(i<5);
// // if statements
// // const ifAge = 25;
// // if(ifAge>20){
// //     console.log('You are over 20 years old');
// // }

// // const newNinjas = ['shaun','ryu', 'hun-li', 'yoshi'];
// // if(newNinjas.length>3){
// //     console.log("that's a lot of ninjas")
// // }

// const password = 'p@ssword1234';
// // if(password.length >=12){
// //     console.log("it's strong password")
// // } else  if(password.length >= 8){
// //     console.log("that password is long enough!");
// // } else {
// //     console.log('password is to short')
// // }
// // logical operators - OR || and AND &&
// if(password.length >=12 && password.includes('@')){
//     console.log("it's mighty stron password")
// } else  if(password.length >= 8 || password.includes('@') && password.length>5){
//     console.log("that password is strong enough!");
// } else {
//     console.log('password is not strong enough ')
// }
// // logical NOT(!)
// //  break and continue
// const scores = [50, 25, 0 ,30, 100,20, 10 ];
// for(i=0; i <scores.length; i++){

//     if(score[i]===0){
//         continue;
//     }
//     console.log('your score: ', scores[i]);

//     if(scores[i]===100){
//         console.log('congrats, you got the best score');
//         break;
//     }
// }

// switch statements

const grade = 'A';
switch(grade){
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got an B');
        break;
    case 'C':
        console.log('You got an C');
        break;
    case 'D':
        console.log('You got an D');
        break;
    case 'E':
        console.log('You got an E');
        break;
    default:
        console.log('not valid grade');
        break;
}

// variables and block scope
let age = 30; //global scope variable
const name = 'shaun';
if(true){
    let age = 40; // local scope variable
    let name = 'shaun';
    console.log('inside 1st code block', age);
    if(true){
        let age = 50;
        console.log('inside 2nd code block', age);
        var test = 'hello';
    }
}

console.log('outside code block', age, name, test);

// function declaration
// function greet(){
//     console.log('Hello there');
// }

// function expression
const speak = function(name = 'luigi', time = 'day'){
    // console.log('General Kenobi');
    console.log(`good ${time} ${name}`);
}; // tylko wtedy uzywamy ; na koncu blocku
// greet();
speak('mario', 'morning'); // wartosc wewnatrz nawiasu to argument

// returnign values
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

//arrow functions
// const calcArea = radius =>  3.14 * radius**2; // gdy jest tylko 1 argument to nie musimy uzywac ()
// // gdy nie ma argumentow lub jest ich wiecej niz 1 to trzeba uzywac()


// const area = calcArea(5);
// console.log(area);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i= 0; i < products.lenght; i++){
//         total += products[i] +products[i]*tax;
//     }
//     return total;
// }

const bill = (products, tax) => {
    let total = 0
    for(let i= 0; i < products.length; i++){
        total += products[i] +products[i]*tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2));


// // functions
// const greet = () => 'Hello there';
// let resultOne = greet();
// console.log(resultOne);
// // methods
// let resultTwo = name.toUpperCase();
// console.log(resultTwo);
// // callback functions and forEach
// let people = ['mario', 'luigi', 'bowser', 'shen', 'rju'];
// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`)
// }
// people.forEach(logPerson);

// //get reference to the 'ul'
// const ul = document.querySelector('.people');
// let html = ``;
// people.forEach(person => {
//     //create html template
//     html += `<li style="color: purple">${person }</li>`
// })
// ul.innerHTML = html;

// objects literals
// const blogs = [
//     {tittle: 'why do we love kebabs', likes: 30},
//     {tittle: 'best restaurants in Wroclaw', likes: 50}
// ];
// console.log(blogs);
let user = {
    name: 'crystal', // key and value
    age: 30,
    email: 'crystal@ninjaweb.co.pl',
    location: 'Berlin',
    blogs: [{tittle: 'why do we love kebabs', likes: 30},
    {tittle: 'best restaurants in Wroclaw', likes: 50}],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('The user logged out');
    },
    logBlogs(){
        // console.log(this.blogs[0]);
        console.log('This user has written following blogs: ');
        this.blogs.forEach(blog => {
            console.log(blog.tittle,blog.likes);
        })
}};
console.log(user);
console.log(user.name);
user.age = 35;
console.log(user['name']);
user['name'] = 'chun-li';
console.log(typeof user);
user.login();
user.logBlogs();
// Math objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
const area = 7.7;
console.log(Math.round(area));
console.log(Math.floor(area)); // floor zaokragla w dół
console.log(Math.ceil(area)); // zaokragla w górę
console.log(Math.trunc(area)); // nie pokazuje liczb po przecinku
// random numbers
const random =  Math.random();
console.log(random);
console.log(Math.round(random*100))
//primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`ScoreOne: ${scoreOne}, ScoreTwo:${scoreTwo}`);
scoreOne = 100;
console.log(`ScoreOne: ${scoreOne}, ScoreTwo:${scoreTwo}`);
// reference values
const userOne = {name: 'rju', age: 30};
const userTwo = userOne;
console.log(userOne, userTwo);
userOne.age = 40;
console.log(userOne, userTwo);
// const para = document.querySelector('div.error ');
// // console.log(para);
// const paras = document.querySelectorAll('p');
// paras.forEach( para => {
//     console.log(para);
// })
// // const errors = document.querySelectorAll('.error');
// // console.log(errors);
// console.log(paras[2]);
// // get element by ID
// const title = document.getElementById('title-page');
// console.log(title);
// // get element by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors); //nie da sie uzyc forEach na HTMLcollection
// get element by their tag name
// const paras = document.getElementsByTagName('p');
// console.log(paras);
// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText  = ' ninjas are awesome!';
const paras = document.querySelectorAll('p');
// paras.forEach( para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// })
// const content = document.querySelector('.content');
// console.log(content.innerHTML);
// content.innerHTML = '<h2>this is new h2 tag</h2>';
// const people = ['mario', 'yoshi', 'toad'];
// people.forEach( person =>{
//     content.innerHTML += `<p>${person}</p>`;
// })
// const link =  document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.wikipedia.com');
// link.innerText = 'wikipedia';
// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green');
// const title = document.querySelector('h1');
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.fontSize = '50px';
// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');
paras.forEach( para =>{
    let content = para.innerHTML;
    if(content.includes('error')){ // alternatywnie content.textContent.includes()
        para.classList.add('error');
    }
    else if(content.includes('success')){
        para.classList.add('success');
    }
    // else{
    //     console.log('nothing to do');
    // }
});

// toggle() dodaje klasę

