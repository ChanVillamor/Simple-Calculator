// ***** Selector

const displayInput = document.querySelector('.input');
const displayOutput = document.querySelector('.output');
const keys = document.querySelectorAll('.key'); // Use querySelectorAll to select all elements with class 'key'

// ***** eventlistener

keys.forEach(function(button) { // Use forEach to loop through the NodeList
   button.addEventListener('click', calculate);
});

// ***** function Calculate

function calculate() {
   let keyText = this.innerHTML;

   if (keyText === 'AC') {
      displayInput.innerHTML = '';
      displayOutput.innerHTML = '0'; // Fix the assignment here
      return;
   }

   if (keyText === 'C') {
      const currentInput = displayInput.textContent;
      displayInput.textContent = currentInput.slice(0, currentInput.length - 1); // Use slice to remove the last character
      return;
   }

   if (keyText === '=') {
      let inputExpression = displayInput.textContent;
      inputExpression = inputExpression.replace(/x/g, '*'); // Replace 'x' with '*'
      inputExpression = inputExpression.replace(/÷/g, '/'); // Replace '÷' with '/'
      let result;

      if (keyText) {
         result = eval(inputExpression); // Evaluate the input expression
      } else {
         result = 'Error'; // Handle errors if any
      }
      displayOutput.innerHTML = result;
   } else {
      displayInput.textContent += keyText; // Use textContent to update the input
   }
}