
function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById("tervetuloa_teksti").textContent += "  " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        document.getElementById("kirjaudu_ulos_lomake").style.display = "inline-block";
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    document.getElementById("kirjautumis_lomake").style.display = "none";
    document.getElementById("kirjaudu_ulos_lomake").style.display = "inline-block";
}

function kirjauduUlos(){
    localStorage.removeItem("nimi");
    localStorage.removeItem("kirjautunut");
    document.getElementById("kirjautumis_lomake").style.display = "block";
    document.getElementById("nimi").value = "";
    document.getElementById("kirjaudu_ulos_lomake").style.display = "none";
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
}