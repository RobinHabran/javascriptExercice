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
  var shoeSize   = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  var result;
  parseInt(shoeSize);
  parseInt(yearOfBirth);

  // cas de la pointure
  if (isNaN(shoeSize)==false && isNaN(yearOfBirth)==false) {
    parseInt(result = schmilblic(shoeSize , yearOfBirth));
    alert(result);
  }
}
