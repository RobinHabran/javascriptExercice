document.getElementById('button').addEventListener('click',eraseForm);
function eraseForm(){
  document.getElementById('lastname').value = '';
  document.getElementById('firstname').value = '';
  document.getElementById('city').value = '';
}
