const fsa = require('fs');

function random(){

}
let p = new Promise(random);
function callback(){
    console.log("Promise succeeded")
}
p.then(callback)
console.log(p);



function readFilePromisified(fsa) {
    return new Promise(resolve => fsa.readFile("a.txt","utf8",(err,data)));
}
function readFile(fsa) {
    fsa.readFile("a.txt","utf8",(err,data) => {
        console.log(data);
        console.log(err);
    });
}