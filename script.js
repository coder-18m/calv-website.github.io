window.addEventListener('touchstart', function(event){
  var box = document.getElementById('ul-li-ul');
  if (event.target != box && event.target.parentNode != box) {
    box.style.display = 'none';
  }
});

let aboutLink = document.querySelector('#about-link');
let aboutItem = document.querySelector('#aboutItem');

aboutLink.addEventListener('click', navigateItem, false);

function navigateItem(e){
aboutItem.scrollIntoView({behavior: "smooth"});
}
