/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
  // '.length' renvoie la longeur de la chaine de caractère
    return texte.length;
}
var remplaceECar = function (texte) {
  // la fonction 'replace(a,b)' remplace le caractère 'a' par le caractère 'b'
    return texte.replace('e',' ');
}
var concatString = function (texte1, texte2) {
  // concaténation des deux chaines de caractère
    return texte1+texte2;
}
var afficherCar5 = function (texte) {
    // renvoie le caractère à l'indice 4 de la chaine de caractère
    return texte[4];
}
var afficher9Car = function (texte) {
    // la fonction 'substring(a,b)' affiche la chaine de caractere de l'indice 'a' à l'indice 'b'
    return texte.substring(0,9);
}
var majusculeString = function (texte) {
  // 'toUpperCase()' est une fonction qui met la chaine de caractère en majuscule
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    // 'toLowerCase()' est une fonction qui met la chaine de caractère en minuscule
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    // la fonction 'trim()' supprime le premier et le dernier espace de la chaine de caractère
    return texte.trim();
}
var IsString = function (texte) {
    // 'typeof' retourne le type de la valeur 'texte'
    return typeof texte === 'string';
}
var AfficherExtensionString = function (texte) {
   // 'substring(a,b)' renvoie la chaine de caractère de l'indice 'a' à 'b'; 'lastIndexOf((a),(optionnel))'   renvoi la derniere occurence du caractère 'a'
   // le 2eme parametre optionnel de la fonction est l'indice du début de la recherche
    return texte.substring(texte.lastIndexOf('.')+1,texte.length);
}
var NombreEspaceString = function (texte) {
  // 
    return 'A completer';
}
var InverseString = function (texte) {
    return 'A completer';
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return 'A completer';
}
var valeurAbsolue = function (nombre) {
    return 'A completer';
}
var valeurAbsolueArray = function (array) {
    return 'A completer';
}
var sufaceCercle = function (rayon) {
    return 'A completer';
}
var hypothenuse = function (ab, ac) {
    return 'A completer';
}
var calculIMC = function (poids, taille) {
    return 'A completer';
}
