function generatePattern() {
    const numRowsInput = document.getElementById("numRows");
    const patternDiv = document.getElementById("pattern");
    patternDiv.innerHTML = ""; // Clear any previous pattern
  
    const numRows = parseInt(numRowsInput.value);
  
    let pattern = ""; // Initialize pattern as an empty string
  
    for (let i = 1; i <= numRows; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += "*";
      }
      pattern += "<br>"; // Add a line break for the next row
    }
  
    patternDiv.innerHTML = pattern;
  }