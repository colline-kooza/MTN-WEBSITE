const link=document.querySelector(".links")
const menuIcon=document.querySelector(".menu")
console.log(menuIcon)

menuIcon.addEventListener("click", ()=>{
    link.classList.toggle("bringBacklinks")
})
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
