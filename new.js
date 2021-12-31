function openNewWindow() {
  document.getElementById('open').style.visibility = 'visible'
  document.getElementById('close').style.visibility = 'visible'
  document.getElementById('addmore').style.visibility = 'hidden'
}

function closeNewWindow() {
  document.getElementById('open').style.visibility = 'hidden'
  document.getElementById('addmore').style.visibility = 'visible'
  document.getElementById('close').style.visibility = 'hidden'
}




function adicionar(tarefa){
  document.getElementById('ok');
  document.getElementById('open').style.visibility = 'hidden'
  document.getElementById('addmore').style.visibility = 'hidden'
  document.getElementById('close').style.visibility = 'hidden'
  document.getElementById('todo').style.visibility = 'visible'

}