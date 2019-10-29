// fonction qui change de couleur le texte en appuyant sur le carré de couleur correspondant
function changeColor(colorSquare){
  // appels test dans la console:
  console.log(colorSquare.className);
  console.log(document.getElementById('text'));

  // 'colorSquare.className.replace('color ','')' = remplace le string 'color ' par rien. Ce qui renvoie à faire une suppression
  document.getElementById('text').style.color = colorSquare.className.replace('color ','');
/*
  // 'colorSquare.className' = récupère le nom des class de l'objet
  if (colorSquare.className == 'color green') {
    // assigne la couleur green à l'attribut html style de l'attribut css color
    document.getElementById('text').style.color = 'green';
  }else if(colorSquare.className == 'color red') {
    document.getElementById('text').style.color = 'red';
  }else if(colorSquare.className == 'color blue'){
    document.getElementById('text').style.color = 'blue';
  } */
}
