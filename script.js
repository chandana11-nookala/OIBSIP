function appendToScreen(value) {
    document.getElementById("result").value += value;
  }
  
  function clearScreen() {
    document.getElementById("result").value = "";
  }
  
  function calculate() {
    const expression = document.getElementById("result").value;
    const result = eval(expression);
    document.getElementById("result").value = result;
  }