
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');//1-3 broke menu code
   	SearchForm.classList.remove('active');
	cartItem.classList.remove('active');
}

////////////////////////////////////////////////////////// broke menu code

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
   cartItem.classList.toggle('active');
	navbar.classList.remove('active'); /*copy this it call remove plaform*/
	SearchForm.classList.remove('active');
}
let SearchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
   SearchForm.classList.toggle('active');
	cartItem.classList.remove('active'); /*copy*/
	navbar.classList.remove('active');
}
window.onscroll = ()=>{
	navbar.classList.remove('active');
	SearchForm.classList.remove('active');
	 cartItem.classList.remove('active');
}
function loader(){
	document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
	setInterval(loader, 3000);
}
window.onload = fadeOut();
