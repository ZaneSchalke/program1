const budget = 330000000000; 
function calculateBudget() {
    let totaal = 0;
    let error = '';
    const resultaat = document.getElementById('result');
    
    for (let i = 1; i <= 12; i++) {
        const inputValue = parseFloat(document.getElementById(`ministry${i}`).value) || 0;
        totaal += inputValue;
    }

    const overblijf = budget - totaal;
    if (overblijf > 0) {
        error = `Er is nog €${overblijf.toLocaleString()} over.`;
    } else if (overblijf < 0) {
        error = `Er is een tekort van €${Math.abs(overblijf).toLocaleString()}.`;
    } else {
        error = 'Het budget is precies verdeeld!';
    }
    resultaat.innerHTML = error;
}