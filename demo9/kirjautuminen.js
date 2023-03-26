function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none";
        var kirjauduUlosNappi = document.getElementById("kirjaudu_ulos_nappi");
        kirjauduUlosNappi.style.display = "inline-block";
        kirjauduUlosNappi.addEventListener("click", function(){
            localStorage.removeItem("nimi");
            localStorage.removeItem("kirjautunut");
            document.getElementById("kirjautumis_lomake").style.display = "block";
            document.getElementById("nimi").value = "";
            kirjauduUlosNappi.style.display = "none";
            document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
        });
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    var kirjauduUlosNappi = document.getElementById("kirjaudu_ulos_nappi");
    kirjauduUlosNappi.style.display = "inline-block";
    kirjauduUlosNappi.addEventListener("click", function(){
        localStorage.removeItem("nimi");
        localStorage.removeItem("kirjautunut");
        document.getElementById("kirjautumis_lomake").style.display = "block";
        document.getElementById("nimi").value = "";
        kirjauduUlosNappi.style.display = "none";
        document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
    });
    document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
}
