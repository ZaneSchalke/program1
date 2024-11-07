let zin = window.prompt("Type hier een zin");

let fourthLetter = zin[3];

let letter = "e";
let position = zin.indexOf(letter);


let modifiedZin = '';

for (let char of zin) {
    modifiedZin += char === letter ? 'a' : char;
}
document.write(`<h3> Opdracht 1 </h3>`);
document.write("<br><br>");
document.write("De zin" + " '" + zin + "' " + "bestaat uit " + modifiedZin.length + " letters");
document.write("<br><br>");
document.write(`De 4de letter van de zin is een: ${fourthLetter}`);
document.write("<br><br>");
document.write(`De '${letter}' staat op plaats: ${position}`);
document.write("<br><br>");
document.write(`De nieuwe zin is:`+` `+modifiedZin);
document.write("<br><br>");
document.write("<br><br>");



function voorkeursBerekeningen() {
    
    let Getal1 = parseFloat(window.prompt("Voer het eerste getal in:"));
    let Getal2 = parseFloat(window.prompt("Voer het tweede getal in:"));


    let som = Getal1 + Getal2;
    let verschil = Getal1 - Getal2;
    let product = Getal1 * Getal2;
    let deling = Getal2 !== 0 ? Getal1 / Getal2 : "Onbepaald (delen door 0)";
    let modulo = Getal2 !== 0 ? Getal1 % Getal2 : "Onbepaald (delen door 0)";

 
    let resultatenDiv = document.getElementById("resultaten");
    resultatenDiv.innerHTML = `
    
        ${Getal1} + ${Getal2} = ${som}<br>
        ${Getal1} - ${Getal2} = ${verschil}<br>
        ${Getal1} x ${Getal2} = ${product}<br>
        ${Getal1} / ${Getal2} = ${deling}<br>
        ${Getal1} % ${Getal2} = ${modulo}<br>
    `;
}



