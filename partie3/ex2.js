// on declare la fonction qui rend visible la zone de texte avec comme parametre l'id de la zone de texte
function turnVisibilite(id){
  console.log('turnVisibilite : True');
  // 'display = "" ' = supprime le 'none' afin de remettre à l'origin le display (selon s'il était block, line ...)
  document.getElementById(id).style.display = '';
}
function turnHidden(id){
  console.log('turnHidden : True');
  // 'display = "" ' = ajoute 'none' afin de supprimer la zone de texte
  document.getElementById(id).style.display = 'none';
}
