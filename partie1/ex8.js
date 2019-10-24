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
  var age   = document.getElementById('age').value;
  parseInt(age);


  if ('') { // cas où le champ n'est pas rempli
    alert('Remplissez le champ d\'âge');
  }else if (isNaN(age)) { // cas où l'utilisateur a mit autre chose qu'un nombre
    alert('-"Les cons ça ose tout, c\'es à ça qu\'on les reconnait."\n Mettez donc un nombre petit malin.');
  }else if (age <= 0) { // cas où l'utilisateur a renseigné un âge négatif
    alert('Mettez un âge positif');
  }else if (age >= 123) { // cas où l'utilisateur a renseigné un âge supérieur à 123
    alert('Vous êtes majeur car vous avez ' + age + ' ans. \n D\'ailleurs vous êtes surement mort ou le doyen de notre humanité !');
  }else if (age <= 18) {  // cas où l'utilisateur a renseigné un âge inférieur à 18
    alert('Vous êtes mineur car vous avez ' + age + ' ans. \n N\'oubliez pas votre casque et votre pioche...');
  }else if (age >= 18) {  // cas où l'utilisateur a renseigné un âge supérieur à 18
    alert('Vous êtes majeur car vous avez ' + age + ' ans.');
  }
}
