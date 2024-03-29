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
  // return texte.charAt(4); //fonctionne aussi
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
    return typeof texte == 'string';
}
var AfficherExtensionString = function (texte) {
   // 'substring(a,b)' renvoie la chaine de caractère de l'indice 'a' à 'b'; 'lastIndexOf((a),(optionnel))'   renvoi la derniere occurence du caractère 'a'
   // le 2eme parametre optionnel de la fonction est l'indice du début de la recherche
    return texte.substring(texte.lastIndexOf('.')+1,texte.length);
}
var NombreEspaceString = function (texte) {
  // la fonction 'split(' ')' compte le nombre d'espace
    return texte.split(' ').length-1;
}
var InverseString = function (texte) {
  // fonction qui permet d'inverser une chaine de caractere
    return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
  // fonction qui retourne le resultat de 'x' puissance 'y'
    return Math.pow(x,y);
}
var valeurAbsolue = function (nombre) {
  // renvoie la valeur absolue du nombre
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
  // 'map(x => calculAfairesur x)' = applique une formule mathématique sur chaque element d'un tableau
    return array.map(x => Math.abs(x));
}
var sufaceCercle = function (rayon) {
  // 'Math.round(x)' = arrondi de 'x' ; 'Math.PI' = pi (3,1415...) ; 'Math.pow(a,b)' = calcul 'a' puissance 'b'
    return Math.round(Math.PI*Math.pow(rayon,2));
}
var hypothenuse = function (ab, ac) {
  // 'hypot(ab,ac)' = retourne l'hypothénuse 'bc' du triangle abc
    return Math.hypot(ab,ac);
}
var calculIMC = function (poids, taille) {
  // 'result' = resultat de l'IMC
  // 'parseFloat()' = transforme la variable en Float ; 'toFixed(n)' = coupe à la 2ème décimale
    let result = poids/(taille*taille);
    return parseFloat(result.toFixed(2));
}
