window.addEventListener('touchStart', function(){
  var box = document.getElementById('ul-li-ul');
  if (event.target != box && event.target.parentNode != box) {
    box.style.display = 'none';
  }
});
