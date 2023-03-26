function onkoKirjautunut() {
    var nimi = localStorage.getItem("nimi");
    if (nimi) {
        document.getElementById("tervetuloa_teksti").textContent += " " + nimi;
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos_nappi").style.display = "inline-block";
    }
}

function kirjaudu() {
    var nimi = document.getElementById("nimi").value;
    if (nimi) {
        localStorage.setItem("nimi", nimi);
        onkoKirjautunut();
    }
    return false;
}

function kirjauduUlos() {
    localStorage.removeItem("nimi");
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
    document.getElementById("kirjautumis_lomake").style.display = "block";
    document.getElementById("kirjaudu_nappi").style.display = "inline-block";
    document.getElementById("kirjaudu_ulos_nappi").style.display = "none";
}