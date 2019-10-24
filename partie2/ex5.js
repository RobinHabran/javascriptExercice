//document.getElementById('image1').addEventListener('mouseover',replacementImgIn);
//document.getElementById('image1').addEventListener('mouseout',replacementImgOut);
document.getElementById('image1').addEventListener('mouseout',replacementImg);


// fonction de remplacement d'image
function replacementImgIn(){
  document.getElementById('image1').setAttribute('src','ex1_2.jpg');
}
function replacementImgOut(){
  document.getElementById('image1').setAttribute('src','ex1.jpg');
}
function replacementImg(){
  if (document.getElementById('image1').src == 'file:///home/lmno002/Documents/javascriptExercice/partie2/ex1.jpg') {
    document.getElementById('image1').setAttribute('src','ex1_2.jpg');
  }else {
    document.getElementById('image1').setAttribute('src','ex1.jpg');
  }
}
