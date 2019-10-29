// fonction qui change la couleur des bordures du form en vert ou rouge selon si les password sont exactement les mêmes
function comparePassword(){
  // cas où les password sont égaux
  if (document.getElementById('password').value == '' || document.getElementById('confirmPassword').value == '') {
    alert('Au moins un des champs n\'est pas rempli');
  }else if (document.getElementById('password').value == document.getElementById('confirmPassword').value) {
    console.log('if completed');
    // first password form
    document.getElementById('password').style.border = '2px solid green';
    document.getElementById('password').style.borderRadius = '5px';
    // second password form
    document.getElementById('confirmPassword').style.border = '2px solid green';
    document.getElementById('confirmPassword').style.borderRadius = '5px';
  }else { // cas où les password diffèrent
    // first password form
    document.getElementById('password').style.border = '2px solid red';
    document.getElementById('password').style.borderRadius = '5px';
    // second password form
    document.getElementById('confirmPassword').style.border = '2px solid red';
    document.getElementById('confirmPassword').style.borderRadius = '5px';
  }
}
