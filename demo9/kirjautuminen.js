document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut() {
  if (localStorage.getItem("kirjautunut") === "kylla") {
    document.getElementById("tervetuloa_teksti").textContent +=
      "  " + localStorage.getItem("nimi");
    document.getElementById("kirjautumis_lomake").style.display = "none";
    document.getElementById("tervetuloa_teksti").innerHTML +=
      '<button id="kirjaudu_ulos_nappi">Kirjaudu ulos</button>';
    document
      .getElementById("kirjaudu_ulos_nappi")
      .addEventListener("click", kirjauduUlos);
  } else {
    document
      .getElementById("kirjautumis_lomake")
      .addEventListener("submit", kirjaudu);
  }
}

function kirjaudu(event) {
  event.preventDefault();
  localStorage.setItem("nimi", document.getElementById("nimi").value);
  localStorage.setItem("kirjautunut", "kylla");
  onkoKirjautunut();
}

function kirjauduUlos() {
  localStorage.removeItem("nimi");
  localStorage.removeItem("kirjautunut");
  location.reload();
}