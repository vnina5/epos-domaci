
//OTVARANJE MENIJA KLIKOM NA NAVBAR
let nav = document.getElementById("navbar");

nav.addEventListener("click", function(){
    let meni = document.getElementById("pocetak");
    if (meni.className === "meni") {
        meni.className += " responsive";
    } else {
        meni.className = "meni";
    }
});