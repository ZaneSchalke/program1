function ziek() {
    const name = document.getElementById("name").value;
    const leeftijd = parseInt(document.getElementById("leeftijd").value);
    const sym1 = document.getElementById("sym1").value;
    const sym2 = document.getElementById("sym2").value;
    const sym3 = document.getElementById("sym3").value;

    const symptoms = [sym1, sym2, sym3];
    const uniqueSymptoms = [...new Set(symptoms)]; 
    const symptomCount = uniqueSymptoms.length;

    const resultElement = document.getElementById("result");
    const symptomsDisplayElement = document.getElementById("symptomsDisplay");
    

    resultElement.textContent = '';
    symptomsDisplayElement.textContent = '';

    if (!name || isNaN(leeftijd) || symptomCount < 1) {
        resultElement.textContent = "Vul alstublieft alle velden in.";
        return;
    }

    // Resultaat tonen
    if ((leeftijd < 18 && symptomCount >= 3) || (leeftijd >= 18 && symptomCount >= 2)) {
        resultElement.textContent = "U bent ziek.";
        symptomsDisplayElement.textContent = "Uw symptomen: " + uniqueSymptoms.map(symptom => symptom.toUpperCase()).join(", ");
    } else {
        resultElement.textContent = "U bent niet ziek.";
    }
}
