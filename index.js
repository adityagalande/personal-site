const nav = document.querySelector('#navigationBar');
const guggu = document.querySelector('.innerTitle');
const topNav = guggu.offsetTop;

function animNav() {
  console.log(window.scrollY + nav.offsetHeight);
  if (window.scrollY + nav.offsetHeight >= topNav) {
    document.getElementById('navigationBar').style.backgroundColor = '#28282B';
    document.getElementById("navigationBar").style.transition = "all 0.7s";
  } else {
    document.getElementById('navigationBar').style.backgroundColor = 'transparent';
    document.getElementById("navigationBar").style.transition = "all 0.7s";
  }
}

window.addEventListener('scroll', animNav);
