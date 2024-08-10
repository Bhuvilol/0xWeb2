const fsa = require('fs');

//synchronously
const contents = fsa.readFileSync("a.txt","utf8");
console.log(contents);

const content = fsa.readFileSync("b.txt","utf8");
console.log(content);

//asynchronously
function print(err,data) {
    console.log(data);
}
const data1 = fsa.readFile("a.txt","utf8",print);
const data2 = fsa.readFile("b.txt","utf8",print);

console.log("Done!");