fetch('http://localhost:3000/produse',
{
    method:'get'
})
.then(function(response) {


    response.json().then(function(data) {
        console.log(data);       
         
//Creare dinamica a produselor

   var dv = document.getElementsByClassName("imgsec")[0];
   for (var i = 0 ;i< data.length; i++ )
{

   var imag = document.createElement("img");
   imag.src= data[i].img; 
   dv.appendChild(imag);
   
} 

     });
});



//editare titlu
var titlu = document.getElementById("titlu");
titlu.innerText="Beuty Style for everyone! ";


