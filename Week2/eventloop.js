// $.on('button', 'click', function onClick() {
//     setTimeout(function timer() {
//         console.log('You clicked the button!');    
//     }, 2000);
// });

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");
function timeout() {
    console.log("Click the button");
}
console.log("hi");

setTimeout(timeout,1000);

console.log("Welcome to the loop");

let c = 0;
for (let i = 0; i < 1000000000; i++) {
    c = c+i;
    
}
console.log("Expensive operation done");

// hi
// Welcome to the loop
// Expensive operation done
// Click the button