function IntroducereDate ()
{
    var nume = document.getElementById("nume").value;
    var prenume = document.getElementById("prenume").value;
    var email  = document.getElementById("email").value;
    var intr = document.getElementById("intr").value;
        
    fetch('http://localhost:3000/formular', 
    {
        method: 'post',
        headers: 
        {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: "Nume="+nume+ "&Prenume="+prenume+ "&Email="+email +"&Intrebari="+intr  

    })
    .then(function (data) 
    {
        console.log('Succes!', data);
        
    })
    .catch(function (error) 
    {
        console.log('Eroare!', error);
    });
    document.forms.formular.reset();      
}

var buton = document.getElementById("buton");
buton.addEventListener("click",IntroducereDate);   

    
//adaugare de continut.
var loc = document.getElementById("text");
var text = document.createElement("p");
text.innerHTML="Daca aveti intrebari va rugam sa ne trimiteti un mesaj mai jos :";
loc.appendChild(text);

//stergere.

var loc = document.getElementById("text");
var text = document.createElement("p");
text.innerHTML="Completati si adresa de Email pentru a putea primi raspuns";
loc.appendChild(text);
//text.remove();

//eveniment pe tasta pentru nume si prenume.

document.getElementById("nume").onkeypress=function(e){
      var e=window.event || e
      var keyunicode=e.charCode || e.keyCode
      return (keyunicode>=65 && keyunicode<=122 || keyunicode==8 )? true : false      

}
    
document.getElementById("prenume").onkeypress=function(e){
    var e=window.event || e
    var keyunicode=e.charCode || e.keyCode
    return (keyunicode>=65 && keyunicode<=122 || keyunicode==8 )? true : false      
    
}
  