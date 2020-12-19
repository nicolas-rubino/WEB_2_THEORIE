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
$(".btnDelete").click(deleteProduit())
$(".btnCommande").click(function checkProduitDansPanier(e){
  var validite = false;
  for(var i=0; i < tabQuantiteProduits.length ; i++){
    if(tabQuantiteProduits[i] > 0)
      validite = true;
  }
  if(!validite){
    e.preventDefault();
    alert("Il n'y a aucun produit dans votre panier ! ")
  }
  });
});

function loadProduits() {
  for (var i = 0; i < tabQuantiteProduits.length; i++) {
    if (tabQuantiteProduits[i] < 1) {
      $('.' + tabProduits[i].num).closest('tr').hide();
    }
    $('.' + tabProduits[i].num + " input").val(tabQuantiteProduits[i]);
  }
}


function deleteProduit(index) {
  if (index !== undefined) {
    $('.' + tabProduits[index].num).closest('tr').remove();
    tabQuantiteProduits[index] = 0;
    localStorage.setItem("tabQuantiteProduits", JSON.stringify(tabQuantiteProduits));
  }
}

$("tr").click(function(){
      var index = $(this).index()
      if(parseInt($("input").eq(index).val()) <= 1 ){
        $("input").eq(index).val(1)
      }
      tabQuantiteProduits[index] = parseInt($("input").eq(index).val())
      localStorage.setItem("tabQuantiteProduits", JSON.stringify(tabQuantiteProduits));
});
