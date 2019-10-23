// fonction avec retour entier du reste de la dividion euclidienne
function showModulo(firstNumber,secondNumber){
  //'%' sigle de modulo = reste de la division euclidienne
  return firstNumber%secondNumber;
}

// appel de la fonction 'showModulo' créée au préalable dans le fichier js
document.getElementById('submit').addEventListener('click',alertShowModulo);
function alertShowModulo(){
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;
  // cas où ce n'est pas un nombre
  if ((isNaN(firstNumber) == true) && (isNaN(secondNumber) == true)){
    alert('Veuillez n\'introduire que des nombres.');
  //cas où au moins l'un des champs n'a pas été rempli
  }else if (!firstNumber && !secondNumber) {
    alert('Au moins un des champs n\'a pas été rempli.');
  // cas où l'on essaye de diviser par 0
  }else if (secondNumber==0) {
    alert('vous ne pouvez pas entrer 0 dans le diviseur')
  // cas valide = nombre, par 0 en diviseur
  }else {
    alert('le reste de la division entière de '+firstNumber+' par '+secondNumber+' est de : '+ showModulo(firstNumber,secondNumber));
  }
}
