document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    let kirjautunut = 'kylla';
    if(kirjautunut === 'kylla'){
        document.getElementById('tervetuloa_teksti').textContent += '  jape!';
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", "jape");
}