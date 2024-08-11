// ms stands for milliseconds
function setTimeoutPromisified(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function callback(){
    console.log("3 seconds have passed");
}
setTimeoutPromisified(3000).then(callback) //promise based approach

// setTimeout(callback, 3000); //callback based approach