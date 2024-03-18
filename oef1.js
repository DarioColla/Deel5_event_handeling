let clickTeller = 0;

document.getElementById("knopje").addEventListener("click", toonTekst);

function toonTekst() {
    let stukjesTekst = document.getElementById("tekstveld").value;
    let tekstParagraaf = document.createTextNode(stukjesTekst);
    let bestaandParagraaf = document.getElementById("tekstgebruiker");

    if (clickTeller === 0) {
        clickTeller++;
        bestaandParagraaf.appendChild(tekstParagraaf);
    } else {
        // Verwijder het bestaande paragrafelement
        bestaandParagraaf.parentNode.removeChild(bestaandParagraaf);

        // Creëer een nieuw paragrafelement en voeg het toe aan de body
        let nieuwParagraaf = document.createElement("p");
        nieuwParagraaf.id = "tekstgebruiker";
        nieuwParagraaf.appendChild(tekstParagraaf);
        document.body.appendChild(nieuwParagraaf);
    }
}

