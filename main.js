function addTask(){
//Récupérer la saisie utilisateur
let newTask = document.getElementById("add").value;
//Récupérer le local Storage
let localStorage = window.localStorage;

//Si le local storage existe
if(localStorage!=null){
  if(localStorage.getItem("compteur")== null){
    localStorage.setItem("compteur",0);
    }
  let compteur = parseInt(localStorage.getItem("compteur"));
  localStorage.setItem("task"+compteur, newTask);
  localStorage.setItem("compteur", compteur +1);
    }
//Vider l'inputPrenom
document.getElementById("add").value = "";

}
