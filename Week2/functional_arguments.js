function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }
  
  function doOperation(a, b, op) {
    return op(a, b)
  }
//#approach 1
  console.log(sum(1, 2))
  console.log(subtract(4,2));
//#approach 2
  console.log(doOperation(2,3,multiply));