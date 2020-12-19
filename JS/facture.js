var nbDeProduits = JSON.parse(localStorage.getItem("nbDeProduits"));
var tabDeId = JSON.parse(localStorage.getItem("tabDeId"));
var tabDeNoms = JSON.parse(localStorage.getItem("tabDeNoms"));
var sousTotal = JSON.parse(localStorage.getItem("sousTotal"));

$(document).ready(function() {
loadProduits();
});

function loadProduits() {
    $('.nbDeProduits').append(nbDeProduits);
    $('.tabDeId').append(tabDeId);
    $('.tabDeNoms').append(tabDeNoms);
    $('.sousTotal').append(sousTotal+ " $");

 }

 $(".btn-warning").click(function(){
    localStorage.clear();
 });

 //DATE
 let today = new Date();
 let currDay = today.getDay();
 let currDate = today.getDate();
 let currMonth = today.getMonth();
 let currYear = today.getFullYear();
 let currHour = today.getHours();
 let currMins = today.getMinutes();
 if(currMins <9){
   currMins = "0"+currMins;
 }
 const monthNames = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
   "Juillet", "Aout", "Septembre", "Novembre", "Decembre"];
 const dayNames = ["Dimanche", "Lundi", "Mardi", "Mercredi","Jeudi","Vendredi","Samedi"];
 $('p').text(" Date : " + dayNames[currDay] + " " + currDate + " " + monthNames[currMonth] + " , " + currYear + " " + currHour + "h" + currMins );
