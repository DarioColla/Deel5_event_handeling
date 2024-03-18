let clickTeller = 0;

document.getElementById("knopje").addEventListener("click", toonTekst);
function toonTekst(){

    let stukjesTekst = document.getElementById("tekstveld").value;
    let tekstParagraaf = document.createTextNode(stukjesTekst);

    if (clickTeller ===0){
        clickTeller++;
        document.getElementById("tekstgebruiker").appendChild(tekstParagraaf);
    }

    else{
        document.getElementById("tekstgebruiker").removeChild(tekstParagraaf);
        document.getElementById("tekstgebruiker").appendChild(tekstParagraaf);

    }

}

