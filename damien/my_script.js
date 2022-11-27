document
.getElementById("inscription")
.addEventListener("submit", function validateform(e) {
  let erreur;

  let sexe = document.getElementById("sexe");
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let telephone = document.getElementById("telephone");
  let website = document.getElementById("website");
  let age = document.getElementById("age");
  let hobbies = document.getElementById("hobbies");

  if (!hobbies.value) {
    erreur = "Veuillez renseigner au moins un hobbie";
  }
  if (!age.value) {
    erreur = "Veuillez renseigner votre age";
  }

  if (!website.value) {
    erreur = "Veuillez renseigner votre website";
  }
  if (!telephone.value) {
    erreur = "Veuillez renseigner votre telephone";
  }
  if (!sexe.value) {
    erreur = "Veuillez renseigner votre sexe";
  }
  if (!email.value) {
    erreur = "Veuillez renseigner votre email";
  }
  if (!name.value) {
    erreur = "Veuillez renseigner votre nom";
  }

  if (erreur) {
    e.preventDefault(); //empeche le comporte defaut du formulaire
    document.getElementById("erreur").innerHTML = erreur; //affiche le message d'erreur

    return false; // rien ne ce passe et le formulaire ne s'envoie pas
  } else {
    alert("Formulaire envoyé !"); //si pas d'erreur formulaire envoyé
  }
});