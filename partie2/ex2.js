var test = document.getElementById('lastname');
// 'onblur' correspond à la perte du focus
test.onblur = alertPerteFocus;
// création de la fonction qui ouvre une boite de dialogie quand le focus du formulaire est perdu
function alertPerteFocus(){
  alert('Merci de votre participation');
}
