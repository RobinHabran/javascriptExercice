document.getElementById('image1').addEventListener('mouseover',replacementImgIn);
document.getElementById('image1').addEventListener('mouseout',replacementImgOut);


// fonction de remplacement d'image
function replacementImgIn(){
  document.getElementById('image1').setAttribute('src','ex1_2.jpg');
}
function replacementImgOut(){
  document.getElementById('image1').setAttribute('src','ex1.jpg');
  alert(event.currentTarget);
}

if (true) {
  document.getElementById('image1').setAttribute('src','ex1_2.jpg');
}else {
  document.getElementById('image1').setAttribute('src','ex1.jpg');
}
