// 'input' = keypress 
document.getElementById('lastname').addEventListener('input', alertKeyTyping);

function alertKeyTyping(){
  alert(document.getElementById('lastname').value);
}
