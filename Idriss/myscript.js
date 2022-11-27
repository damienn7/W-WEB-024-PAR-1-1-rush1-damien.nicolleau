//alerte quand on valide le formulaire

document.getElementById("inscription").addEventListener("submit", 
function (e) {
       
        
        var erreur; 

        var sexe = document.getElementById("sexe");
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var telephone = document.getElementById("telephone");
        var website = document.getElementById("website");
        var age = document.getElementById("age");
        var hobbies = document.getElementById("hobbies");
        
        if (!hobbies.value){
                erreur = "Veuillez renseigner au moins un hobbie"
        }
        if (!age.value){
                erreur = "Veuillez renseigner votre age"
        }
        
        if (!website.value){
                erreur = "Veuillez renseigner votre website"
        }
        if (!telephone.value){
                erreur = "Veuillez renseigner votre telephone"
        }
        if (!sexe.value){
                erreur = "Veuillez renseigner votre sexe"
        }
        if (!email.value){
                erreur = "Veuillez renseigner votre email"
        }
        if (!name.value){
                erreur = "Veuillez renseigner votre nom"
        }
        
      

        if(erreur) {
                e.preventDefault(); //empeche le comporte defaut du formulaire
                document.getElementById("erreur").innerHTML = erreur; //affiche le message d'erreur
                Element.style = "outline: 1pc solid red";
                return false // rien ne ce passe et le formulaire ne s'envoie pas
        } else {
                alert('Formulaire envoyé !') //si pas d'erreur formulaire envoyé
        }

   
});
