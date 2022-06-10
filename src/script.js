document.querySelector('.nav-toggler').onclick = (e) => {
  console.log(e);
  document.getElementById(e.target.parentElement.dataset.navbarId).classList.toggle('nav-shown');
};