function sum(a,b) {
    return parseInt(a)+b;
}
let ans = sum("20",30)
console.log(ans);


function sum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans+=i;
    }
    return ans;
}

//SYNCHRONOUS CODE : Synchronous code is executed line by line, in the order it's written. Each operation waits for the 
// previous one to complete before moving on to the next one.

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);