let navbar = document.querySelector('.header .navbar');
let menubtn= document.querySelector('#menu-btn');

menubtn.onclick = () =>{
	menubtn.classList.toggle('fa-times');
	navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {  /*copy it from website from swip demos chose on (netigate)*/
      grabCursor:true,
		loop:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".food-slider", {  /*copy it from website from swip demos chose on (netigate with reponsive)*/
      grabCursor:true,
		loop:true,
    centeredSlides:true,//point to the center of box
   spaceBetween: 20,//point to the center of box
  //  ========================================
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          700: {
            slidesPerView: 2,
            
          },
          1000: {
            slidesPerView: 3,
            
          },
        },
      });

let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food =>{

  food.onclick = () =>{
    // ..........
      previewContainer.style.display = 'flex';
// ......
    let name = food.getAttribute('data-name');
    previewBox.forEach(preview => {
      let target = preview.getAttribute('data-traget');
        if(name == target){
          preview.classList.add('active');
        }
    });
  };
});

previewContainer.querySelector("#close-preview").onclick = () =>{

  previewContainer.style.display = 'none';
  

  previewBox.forEach(close => {
    close.classList.remove('active');
  });

}

var swiper = new Swiper(".menu-slide", {  /*copy it from website from swip demos chose on (netigate with reponsive)*/
grabCursor:true,
loop:true,
//===========
autoHeight:true,
// ===========
centeredSlides:true,//point to the center of box
spaceBetween: 20,//point to the center of box
//  ========================================
pagination: {
el: ".swiper-pagination",
clickable: true,
},
});


var swiper = new Swiper(".blog-slider", {  /*copy it from website from swip demos chose on (netigate with reponsive)*/
      grabCursor:true,
		loop:true,
    autoHeight:true,
    centeredSlides:true,//point to the center of box
   spaceBetween: 20,//point to the center of box
  //  ========================================
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
        breakpoints: {
          0: {
            slidesPerView: 1,
            
          },
          700: {
            slidesPerView: 2,
            
          },
          1000: {
            slidesPerView: 3,
            
          },
        },
      });


      window.onscroll = ()=>{
       menubtn.classList.remove('fa-times');
	      navbar.classList.remove('active');
};
    

// function loader(){
// 	document.querySelector('.loader-con').classList.add('fade-out');
// }
// function fadeOut(){
// 	setInterval(loader, 3000);
// }
// window.onload = fadeOut();