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
const alert=document.querySelector(".notification");
const portifilio=document.querySelector(".vist-my-portifilo")
setTimeout(()=>{
    alert.style.display="block";
    alert.classList.add("flyin")
},3000)

setTimeout(()=>{
  alert.classList.remove("flyin")
}, 7000)

setTimeout(()=>{
  alert.style.display="none";
}, 8000)
/*portiflio */

setTimeout(()=>{
  portifilio.style.display="flex";
}, 9000)
setTimeout(()=>{
  portifilio.classList.add("addPortiflio")
}, 6000)

setTimeout(()=>{
  portifilio.classList.remove("addPortiflio")
}, 8000)
setTimeout(()=>{
  portifilio.style.display="none";
},15000)