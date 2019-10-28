function modifiedImg(image) {
  // méthode 1:
  //document.getElementById(image.id).src = image.id + '_2.jpg';

  //méthode 2: 
  // 'image' = document.getElementById('')
  // 'src' = la source de l'image1
  // 'image.id' = pointe l'id de l'element image
  image.src = image.id + '_2.jpg';
}
