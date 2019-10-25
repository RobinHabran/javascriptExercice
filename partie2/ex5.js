// fonction qui fait changer d'image et qui prend en parametre l'id de l'objet image
function replacementImg(id){
  // 'console.log()' = alert dans la console du menu F12 du navigateur
  console.log(id);
  console.log(document.getElementById('image2'));
  // je recupere le l'element de l'id en parametre de la fonction et je rajoute l'extension voulue
  document.getElementById(id).src = 'ex5' +id+'_2.jpg';
}
