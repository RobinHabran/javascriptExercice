// fonction qui applique une bordure
// parametre 'borderWidt' = largeur de la bordure ; parametre 'color' = couleur de la bordure
function addBorderImg(borderWidth,color){
  // 'style.border' pointeur sur la bordure de l'image
  // 'px solid black' le code caracteristique de la bordure
  console.log(document.getElementById('image1').style.border);
  document.getElementById('image1').style.border = borderWidth +'px solid '+ color;
}
