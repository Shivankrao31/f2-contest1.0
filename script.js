// function calculate(num1, num2, operator) {
   
//   }
  
 
//   function performOperations() {
    
//     var num1 = document.getElementById("num1").value;
//     var num2 = document.getElementById("num2").value;
//     var result = document.getElementById("result");
//     var operator = document.getElementById("operator").value;
   
//     if (isNaN(num1) || isNaN(num2)) {
//       result.textContent = "Please enter valid numbers!";
//     }
//     else if (operator === "") {
//       result.textContent = "Please select an operator!";
//     }
//     if(operator == "+"){
//         result.textContent = num1 + num2 ;
//     }
//     else if(operator == "-"){
//         result.textContent = num1 - num2 ;
//     }
//     else if(operator == "*"){
//         result.textContent = num1 * num2 ;
//     }
//     else if(operator == "/"){
//         result.textContent = num1 / num2 ;
//     }
//     else{
//         result.textContent = "NULL";
//     }


//     const res = calculate(parseFloat(num1), parseFloat(num2), operator);
//     result.textContent = "Result is : " + res;
//   }



function calculate(num1, num2, operator) {
    if(operator == "+"){
      return num1 + num2 ;
    }
    else if(operator == "-"){
      return num1 - num2 ;
    }
    else if(operator == "*"){
      return num1 * num2 ;
    }
    else if(operator == "/"){
      return num1 / num2 ;
    }
    else{
      return null;
    }
  }
  
  function performOperations() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var result = document.getElementById("result");
    var operator = document.getElementById("operator").value;
     
    if (isNaN(num1) || isNaN(num2)) {
      result.textContent = "Please enter valid numbers!";
    }
    else if (operator === "") {
      result.textContent = "Please select an operator!";
    }
    else {
      var res = calculate(num1, num2, operator);
      if (res === null) {
        result.textContent = "Invalid operator selected!";
      }
      else {
        result.textContent = "Result is : " + res;
      }
    }
  }
  