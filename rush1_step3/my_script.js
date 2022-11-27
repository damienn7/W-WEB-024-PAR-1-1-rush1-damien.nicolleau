

document.getElementById("inscription").addEventListener("submit", 
function (e) {

        var sexe = document.getElementByName("sexe")
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var telephone = document.getElementById("telephone");
        var website = document.getElementById("website");
        var age = document.getElementById("age");
        
        
        if (!age.value){
          erreur = "Veuillez renseigner votre age"             
          document.age.style.backgroundColor = "red";
        }
    
        if (!website.value){
          erreur = "Veuillez renseigner votre website"
          document.age.style.backgroundColor = "red";
        }
        
        if (!telephone.value){
          erreur = "Veuillez renseigner votre telephone"
          
        }
  
        if (!sexe.value){
          erreur = "Veuillez renseigner votre sexe"
          document.age.style.backgroundColor = "red";
        }

        if(!email.value) {
          erreur = "Veuillez renseigner votre email"
          document.age.style.backgroundColor = "red";
        } 

        
        if (!name.value){
          erreur = "Veuillez renseigner votre nom"
          document.age.style.backgroundColor = "red";
        }
        
      

        if(erreur) {
                e.preventDefault(); //empeche le comporte defaut du formulaire
                document.getElementById("erreur").innerHTML = erreur; //affiche le message d'erreur
                return false // rien ne ce passe et le formulaire ne s'envoie pas
        } else {
                alert('Formulaire envoyé !') //si pas d'erreur formulaire envoyé
        }
   
});




