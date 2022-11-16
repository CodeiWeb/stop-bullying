const btnmobile = document.getElementById('btn-mobile'); // selecting the btn-mobile id that is in the html

function clickOnMenu() {  // function 'clickOnMenu'
  const nav = document.getElementById('nav'); // selecting nav id
  nav.classList.toggle('active')  // Add the 'active' class if you don't have this function, if you do, remove the 'active' class
}


btnmobile.addEventListener('click', clickOnMenu); // event when clicking activate the function 'clickOnMenu '