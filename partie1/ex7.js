function schmilblic(shoeSize, yearOfBirth){
  parseInt(shoeSize);
  parseInt(yearOfBirth);
  var result;
/*  var result = shoeSize *2;
  result += 5;
  result *= 50;
  result -= yearOfBirth;
  result += 1766;
*/
  return result = (shoeSize*2+5)*50-yearOfBirth+1766;
}

document.getElementById('submit').addEventListener('click' , appelSchmilblic);
function appelSchmilblic(){
  var shoeSize   = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result;
  parseInt(shoeSize);
  parseInt(yearOfBirth);

  // cas de la pointure
  if ('') {
    alert('Remplissez tous les champs');
  }else if (isNaN(shoeSize) || isNaN(yearOfBirth)) {
    alert('-"Les cons ça ose tout, c\'es à ça qu\'on les reconnait."\n Mettez donc un nombre petit malin.');
  }else if (shoeSize <= 16) {
      alert('Vous devez être dyslexique... On vous a demandé votre taille de pied et non la taille de votre membre pénien. \n Mettez donc une pointure plus grande que 20, on vous croira cette fois ci.');
  }else if (shoeSize >= 55) {
      alert('Dites moi Fraudon, vous avez changé de monde pour aller jusqu\'au notre... \n Essayer avec une pointure inférieur à 55.');
  }else if (yearOfBirth<=0) {
      alert('Bonjour Jésus... Mettez une année de naissance positive.');
  }else if (yearOfBirth>2020) {
      alert('Non de zeus Marty ! Vous n\'etes donc pas né ! \n Mettez une année de naissance inférieur à 2020');
  }else {
    parseInt(result = schmilblic(shoeSize , yearOfBirth));
    alert(result);
  }
}

//alert('Ta capacité à comprendre les consignes est à la hauteur ' );
