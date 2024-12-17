let currentInput = "";
// Append clicked values to the display
function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}
// Clear the display
function clearDisplay() {
    currentInput = "";
    document.getElementById('display').value = currentInput;
}
// Calculate the result
function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').value = currentInput;
    } catch (e) {
        document.getElementById('display').value = "Error";
        currentInput = ""; // reset on error
    }
}
// Event listener for keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('display').value = currentInput;
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});