//synchronously
const fsa = require('fs');

const contents = fsa.readFileSync("a.txt","utf8");
console.log(contents);

const content = fsa.readFileSync("b.txt","utf8");
console.log(content);

