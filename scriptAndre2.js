// Prompt the user for input
const number = parseInt(prompt("Enter a number:"));
let num = Math.abs(number);
let sum = 0;

// Loop to extract and sum the digits
while (num > 0) {
    const digit = num % 10; // Get the last digit
    sum += digit; // Add the digit to the sum
    num = Math.floor(num / 10); // Remove the last digit
}

// Display the sum in the document
document.write(`The sum of digits in ${number} is: ${sum}`);
// comment