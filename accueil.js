function Produit(num,nom,id,prix){
  this.num = num;
  this.nom = nom;
  this.id = id;
  this.prix = prix;
}
var produit1 = new Produit(
  "produit1",
  "Jeans",
  "0001",
  59.99
);
var produit2 = new Produit(
  "produit2",
  "Hoodie",
  "0002",
  242.32
);
var produit3 = new Produit(
  "produit3",
  "Robe",
  "0003",
  172.00
);
var produit4 = new Produit(
  "produit4",
  "T-shirt",
  "0004",
  134.56
);
var produit5 = new Produit(
  "produit5",
  "Pierre",
  "0005",
  89.99
);

var produit6 = new Produit(
  "produit6",
  "Montre",
  "0006",
  79.99
);
var produit7 = new Produit(
  "produit7",
  "Casquette",
  "0007",
  67.42
);
var produit8 = new Produit(
  "produit8",
  "Souliers",
  "0008",
  45.50
);


var tabQuantiteProduits = JSON.parse(localStorage.getItem("tabQuantiteProduits"));
if (tabQuantiteProduits == null){
  var tabQuantiteProduits = [0,0,0,0,0,0,0,0];
  localStorage.setItem("tabQuantiteProduits",JSON.stringify(tabQuantiteProduits));
}

localStorage.setItem("produit1", JSON.stringify(produit1));
localStorage.setItem("produit2", JSON.stringify(produit2));
localStorage.setItem("produit3", JSON.stringify(produit3));
localStorage.setItem("produit4", JSON.stringify(produit4));
localStorage.setItem("produit5", JSON.stringify(produit5));
localStorage.setItem("produit6", JSON.stringify(produit6));
localStorage.setItem("produit7", JSON.stringify(produit7));
localStorage.setItem("produit8", JSON.stringify(produit8));



/////////////DEBUT PROGRAMME
$(document).ready(function(){
$(".buttonPanier").click(defPanier());
$(".btn-warning").click(ajouterProduit());
$('.nav-link').on('click', function(){
  $('.navbar-toggler').click();
});
});

function ajouterProduit(index){
  tabQuantiteProduits[index] +=1;
  $(".btn-warning").eq(index).text("Acheter ("+tabQuantiteProduits[index]+')') ;
}

function defPanier(){
  for(var i=0; i < tabQuantiteProduits.length ; i++){
    localStorage.setItem("tabQuantiteProduits", JSON.stringify(tabQuantiteProduits));
  }
}
