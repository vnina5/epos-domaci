
//VALIDACIJA FORME
let dugme = document.getElementById("potvrdi");

dugme.addEventListener("click", function (){
    let ime = document.forms["form"]["ime"];
    let prezime = document.forms["form"]["prezime"];
    let telefon = document.forms["form"]["telefon"];
    let email = document.forms["form"]["email"];
    let brojosoba = document.forms["form"]["brojosoba"];
    let datum = document.forms["form"]["datum"];
    let vreme = document.forms["form"]["vreme"];
    let izaberi = document.forms["form"]["izaberi"];
    let komentar = document.forms["form"]["komentar"];

    confirm("Podaci koje ste uneli su: \nIme:  " + ime.value + "\nPrezime:  " + prezime.value + "\nTelefon:  " + telefon.value + "\nEmail:  " + email.value + "\nBroj osoba:  " + brojosoba.value + "\nDatum:  " + datum.value + "\nVreme:  " + vreme.value + "\nIzabrali ste sto:  " + izaberi.value + "\nVaš komentar:  " + komentar.value);
});


 




