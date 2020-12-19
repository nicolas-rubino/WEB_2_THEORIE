var produit1 = JSON.parse(localStorage.getItem("produit1"));
var produit2 = JSON.parse(localStorage.getItem("produit2"));
var produit3 = JSON.parse(localStorage.getItem("produit3"));
var produit4 = JSON.parse(localStorage.getItem("produit4"));
var produit5 = JSON.parse(localStorage.getItem("produit5"));
var produit6 = JSON.parse(localStorage.getItem("produit6"));
var produit7 = JSON.parse(localStorage.getItem("produit7"));
var produit8 = JSON.parse(localStorage.getItem("produit8"));
var tabQuantiteProduits = JSON.parse(localStorage.getItem("tabQuantiteProduits"));
var tabProduits = [produit1, produit2, produit3, produit4, produit5, produit6, produit7, produit8];



$(document).ready(function() {
loadProduits();
});

function loadProduits() {
  var nbDeProduits=0;
  var tabDeId = [];
  var tabDeNoms = [];
  var total=0;
  var tps;
  var tvq;
  var sousTotal=0;
  for (var i = 0; i < tabQuantiteProduits.length; i++) {
    if (tabQuantiteProduits[i] < 1) {
      $('.' + tabProduits[i].num).closest('tr').remove();
    }
    else{
    nbDeProduits += tabQuantiteProduits[i];
    tabDeId.push(" "+tabProduits[i].id+",");
    tabDeNoms.push(" "+tabProduits[i].nom+",");
    $('.' + tabProduits[i].num + " td").eq(3).text(tabQuantiteProduits[i]);
    $('.' + tabProduits[i].num + " td").eq(4).text(parseFloat(tabProduits[i].prix)*parseFloat(tabQuantiteProduits[i]))
    var totalPrevu = parseFloat($('.' + tabProduits[i].num + " td").eq(4).text())
    if(!isNaN(totalPrevu)){
      total += Math.round(totalPrevu)
      $(".total").text(total+"$")
    }
   }
 }
   tps = Math.round((total*1.05)-total);
   $(".tps").text(tps+"$")
   tvq = Math.round((total*1.09975)-total);
   $(".tvq").text(tvq+"$")
   sousTotal=total+tps+tvq;
   $(".sousTotal").text(sousTotal+"$");
   localStorage.setItem("sousTotal", JSON.stringify(sousTotal));
   localStorage.setItem("nbDeProduits", JSON.stringify(nbDeProduits));
   localStorage.setItem("tabDeNoms", JSON.stringify(tabDeNoms));
   localStorage.setItem("tabDeId", JSON.stringify(tabDeId));
}
