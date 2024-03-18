let aantalClicks =0;

document.getElementById("knop").addEventListener("click", toonParagraaf);

function toonParagraaf() {
    if (aantalClicks === 0) {
        aantalClicks++;
        let paragraaf = document.createElement("p");
        let paragraafTekst = document.createTextNode("Je hebt " + aantalClicks + " op de knop geklikt");
        paragraaf.appendChild(paragraafTekst);
        document.getElementsByTagName("body")[0].appendChild(paragraaf);
        paragraaf.id = "stukjetekst";
    }
    else{
        aantalClicks++;
        document.getElementById("stukjetekst").innerHTML = "je hebt " + aantalClicks + " keer op de knop geklikt!";

    }
}



