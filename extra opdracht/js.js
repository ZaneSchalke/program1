function calculate(operator) {
    const getal1 = parseFloat(document.getElementById('getal1').value);
    const getal2 = parseFloat(document.getElementById('getal2').value);
    let result = '';
    if (isNaN(getal1) || isNaN(getal2)) {
        result = 'Invalid input';
    } else {
        switch (operator) {
            case '+':
            result = getal1 + getal2;
            break;
            case '-':
            result = getal1 - getal2;
            break;
            case '*':
            result = getal1 * getal2;
            break;
            case '/':
            result = getal2 !== 0 ? getal1 / getal2 : 'Cannot divide by zero';
            break;
        }
    }
    document.getElementById('antwoord').value = result;
}