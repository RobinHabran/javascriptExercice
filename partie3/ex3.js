// fonction qui change de couleur le texte en appuyant sur le carré de couleur correspondant
function changeColor(colorSquare){
  // appels test dans la console:
  console.log(colorSquare.className);
  console.log(document.getElementById('text'));
/*
  var myColor = colorSquare.className - 'color ';
  console.log(typeof myColor);
  document.getElementById('text').style.color = myColor;
*/
  // 'colorSquare.className' = récupère le nom des class de l'objet
  if (colorSquare.className == 'color green') {
    // assigne la couleur green à l'attribut html style de l'attribut css color
    document.getElementById('text').style.color = 'green';
  }else if(colorSquare.className == 'color red') {
    document.getElementById('text').style.color = 'red';
  }else if(colorSquare.className == 'color blue'){
    document.getElementById('text').style.color = 'blue';
  }

}
