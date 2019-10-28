// fonction qui applique une bordure
// parametre 'image' = l'objet image ; 'border' = 3px solid black
function addBorderImg(image,border){
  // 'style.border' pointeur sur la bordure de l'image
  // 'px solid black' le code caracteristique de la bordure
  // console.log(document.getElementById('image1').style.border);
  image.style.border = border;
}
