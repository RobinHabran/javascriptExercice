document.getElementById('image1').addEventListener('mouseover',replacementImg);
// on charge en mémoire l'image de remplacement
var img = new Image();
img.src = 'ex1_2.jpg';
// fonction de remplacement d'image
function replacementImg(){
  // je met mon image dans la variable imgBase
  var imgBase = document.getElementById('image1');
  // j'initialise 'imgReplace' par l'image de remplacement
  var imgReplace = 'ex1_2.jpg';
  // 'gsetAttribute' = est une fonction qui prend en parametre un string qui est l'attribut de l'objet de remplacement
  // et l'objet à remplacer. Puis qui remplace le premier objet par le deuxieme.
  imgBase.setAttribute('src',imgReplace);
}
