document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById("tervetuloa_teksti").textContent += "  " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "block";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    document.getElementById("kirjaudu_nappi").style.display = "none";
    document.getElementById("kirjaudu_ulos_nappi").style.display = "block";
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + localStorage.getItem("nimi");
}

function kirjauduUlos(){
    localStorage.removeItem("nimi");
    localStorage.removeItem("kirjautunut");
    document.getElementById("kirjautumis_lomake").style.display = "block";
    document.getElementById("nimi").value = "";
    document.getElementById("kirjaudu_nappi").style.display = "inline-block";
    document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
}