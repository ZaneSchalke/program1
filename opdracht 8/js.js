
function bepaalCategorie() {
    const leeftijd = parseInt(document.getElementById('leeftijd').value);
    let categorie;
    if (isNaN(leeftijd)) {
        categorie = "Voer een geldige leeftijd in.";
    } else if (leeftijd < 4) {
        categorie = "Peuter";
    } else if (leeftijd < 13) {
        categorie = "Kind";
    } else if (leeftijd < 20) {
        categorie = "Tiener";
    } else if (leeftijd < 65) {
        categorie = "Volwassene";
    } else {
        categorie = "Senior";
    }
    document.getElementById('resultaat').textContent = "Leeftijdscategorie: " + categorie;
}