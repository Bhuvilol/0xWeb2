// ms stands for milliseconds
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback) //promise based approach

// setTimeout(callback, 3000); //callback based approach









//assignment:
// write a promisified version of fs.readFile,cleanfile
function readTheFile(sendTheFinalValueHere){
    fs.readFile("a.txt","utf8",function(err,data){
        sendTheFinalValueHere(data);
    })
}
function readFile(fileName){
    return new Promise(readTheFile)
}
const p = setTimeoutPromisified();
function callback(content){
    console.log(content);
}
p.then(callback);