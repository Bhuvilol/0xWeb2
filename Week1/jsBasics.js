let firstname = "John";
// const age = 30;
var isStudent = true;

console.log(firstname);
// console.log(age);

console.log(isStudent);

let students = ["Bhabesh","Nibedita","Shaswat"];
console.log(students[0]);
console.log(students[4]);

// let age = 19;
// let canVote = (age>18);
// console.log(canVote);

function canVote(age) {
    if (age>18) {
        return true;
    }else{
        return false;
    }
}
let dec = canVote(12);
console.log(canVote(dec));
function greet(ans) {
    return "Hello "+ans;
}

function choice(num) {
    if (num%2==0) {
        return "The number is even";
    } else {
        return "The number is odd";
    }
}

console.log(choice(30));

let ans = greet("Bhabesh");
console.log(ans);

function sum(a,b) {
    let tsum = a+b;
    return tsum;
}

console.log(sum("bhabesh ",5));

let addition = 0;
for (let i = 0; i <= 10; i++) {
    addition+=i;
    console.log(addition);
}


let user1 ={
    name: "Bhabesh",
    age:21,
}
let bayasa = {
    gender: "male"
}

function greeting(user) {
    console.log("Hi "+user.name+" your age is "+ user.age+". You are a "+bayasa.gender);
}
greeting(user1);

let arr = ["Bhabesh",21,{
    title: "Behera",
    age:21,
    cities:["Bhonsar","Kharagpur","Sambalpur",{
        country:"India",
        city:"Delhi"
    }]
}]
console.log(object);
//create a function that takes an array of objects as input 
//and returns the users whose age>18 and are male.
const pepul = [{
    name:"Bhabesh",
    age:21,
    gender:"male"
},{
    name:"Nibedita",
    age:21,
    gender:"female"
},{
    name:"Sahil",
    age:19,
    gender:"male"
}]
function data(arr) {
    
}