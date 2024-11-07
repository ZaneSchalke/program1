function calculateTotal() {
    const pricePerUnit = parseFloat(document.getElementById('pricePerUnit').value);
    const units = parseInt(document.getElementById('units').value);
    let totalPrice;
    let message;
    if (isNaN(pricePerUnit) || isNaN(units) || units < 0 || pricePerUnit < 0) {
        message = "Vul geldige nummers in."; 
    } else {
        totalPrice = (pricePerUnit * units).toFixed(2);
        message = "Totale Prijs: " + totalPrice;
    }
    document.getElementById('result').textContent = message;
}