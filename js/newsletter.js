
// POJAVLJIVANJE BALORO NASLOVA
$("#baloro").fadeIn(3000);



//ALERT ZA FORMU ZA NEWSLETTER
$("#new-btn").on("click", function(){

    let mail = document.forms["new"]["mail"];
    alert(mail.value + "\nVaša prijava je uspešno poslata! Hvala Vam!");

});



