
//POJAVLJIVANJE NASLOVA MENI 
$("#naslov_meni").slideDown(3000);


//GLOVO U NOVOM PROZORU - WINDOW
$("#naruci").on("click", function openWin() {
    myWindow = window.open("https://glovoapp.com/rs/sr/beograd/baloro45/", "myWindow", "width=1500,height=1000");
});

