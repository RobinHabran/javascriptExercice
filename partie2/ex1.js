// je récupère l'id de 'l'image1' et j'ajoute l'event qui appel une fonction lors du survol
document.getElementById('image1').addEventListener('mouseover',replacementImgIn);
/*
// on charge en mémoire l'image de remplacement
var img = new Image();
img.src = 'ex1_2.jpg';
*/
// fonction de remplacement d'image
function replacementImgIn(){
  /*
  // je met mon image dans la variable imgBase qui sera l'image de base
  var imgBase = document.getElementById('image1');
  // j'initialise 'imgReplace' par l'image de remplacement
  var imgReplace = 'ex1_2.jpg';
  // 'gsetAttribute' = est une fonction qui prend en parametre un string qui est l'attribut de l'objet de remplacement
  // et l'objet à remplacer. Puis qui remplace le premier objet par le deuxieme.
  imgBase.setAttribute('src',imgReplace);
  */
  /* version 1 ligne :
  document.getElementById('image1').setAttribute('src','ex1_2.jpg');
  */
  // correction:
  // remplacement de la source de l'image lors de l'appel de la fonction
  document.getElementById('image1').src = 'ex1_2.jpg';
}
