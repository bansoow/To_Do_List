function addTask(){
//Récupérer la saisie utilisateur
let newTask = document.getElementById("add").value;
const nouvelleEmplacementTache = document.createElement("div")
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
  nouvelleEmplacementTache.innerHTML = `<div class="liste" id="${compteur}">
                                          <li id="task">${newTask}
                                          <span><button onclick="suppr()" type="button" class="clear">Suppr</button></span></li>
                                          </div>`;
  document.querySelector("ul").appendChild(nouvelleEmplacementTache);
    }
//Vider l'inputPrenom
document.getElementById("add").value = "";

}

function supprAll(){
let localStorage = window.localStorage;
if(localStorage!=null){
localStorage.clear();
}
location.reload();
}
