
let displayValue = '';
//captura de datos
function appendToDisplay(value) {
    displayValue = displayValue + value;
    document.getElementById('display').value = displayValue;
}
//borrar todo
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}
//obtener resultados
function calculateResult() {
        displayValue = eval(displayValue);
        document.getElementById('display').value = displayValue;
    }