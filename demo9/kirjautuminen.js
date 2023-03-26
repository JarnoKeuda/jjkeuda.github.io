document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    if(localStorage.getItem("kirjautunut") === 'kylla'){
        document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa " + localStorage.getItem("nimi");
        document.getElementById("kirjaudu_lomake").remove();
        var kirjauduUlosNappi = document.createElement("input");
        kirjauduUlosNappi.type = "submit";
        kirjauduUlosNappi.value = "Kirjaudu ulos";
        kirjauduUlosNappi.onclick = function() {
            localStorage.removeItem("nimi");
            localStorage.removeItem("kirjautunut");
            document.getElementById("kirjautumis_lomake").appendChild(kirjauduLomake);
            document.getElementById("tervetuloa_teksti").textContent = "Tervetuloa";
        }
        document.getElementById("kirjautumis_lomake").appendChild(kirjauduUlosNappi);
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    var tervetuloaTeksti = document.getElementById("tervetuloa_teksti");
    tervetuloaTeksti.textContent = "Tervetuloa " + localStorage.getItem("nimi");
    var kirjauduLomake = document.getElementById("kirjaudu_lomake");
    kirjauduLomake.remove();
    var kirjauduUlosNappi = document.createElement("input");
    kirjauduUlosNappi.type = "submit";
    kirjauduUlosNappi.value = "Kirjaudu ulos";
    kirjauduUlosNappi.onclick = function() {
        localStorage.removeItem("nimi");
        localStorage.removeItem("kirjautunut");
        document.getElementById("kirjautumis_lomake").appendChild(kirjauduLomake);
        tervetuloaTeksti.textContent = "Tervetuloa";
    }
    document.getElementById("kirjautumis_lomake").appendChild(kirjauduUlosNappi);
}

var kirjauduLomake = document.getElementById("kirjautumis_lomake");
kirjauduLomake.addEventListener("submit", function(event) {
    event.preventDefault();
    kirjaudu();
});