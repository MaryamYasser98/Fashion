
let nav = document.querySelector('.navbar');

let menu = document.querySelector('#menu-bar')

let close_mark = document.querySelector('#close')

let color_theme = document.querySelector('#toggle-theme');




menu.onclick = () =>{
    nav.classList.toggle('active')
}

close_mark.onclick = () =>{
    nav.classList.remove('active')
}


color_theme.onclick = () =>{

    color_theme.classList.toggle('fa-sun');

    if(color_theme.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active')
    }
    else{
        document.querySelector('body').classList.remove('active')
    }
}


window.onscroll = () =>{

    nav.classList.remove('active')

    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active')
    }
    else{
        document.querySelector('header').classList.remove('active')
    }

}//end window scroll





//products
var swiper = new Swiper(".product-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween:10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        550:{
            slidesPerView:2
        },
        800:{
            slidesPerView:3
        },
        1000:{
            slidesPerView:3
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });






 //featured
document.querySelectorAll('.small-image-1').forEach(images =>{

    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute('src');
    }
})
document.querySelectorAll('.small-image-2').forEach(images =>{

    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute('src');
    }
})
document.querySelectorAll('.small-image-3').forEach(images =>{

    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute('src');
    }
}) 




//deal
let count_data = new Date('aug, 2021 00:00:00').getTime();

function countDown (){

    let now = new Date().getTime();
    gap = now - count_data;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60 ;
    let days = hours * 24;

    let d = Math.floor(gap / (days));
    let h = Math.floor((gap % (days)) / (hours));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('days').innerText = d ;
    document.getElementById('hours').innerText = h ;
    document.getElementById('minutes').innerText = m ;
    document.getElementById('seconds').innerText = s ;
}//end function countDown

setInterval(function(){
    countDown()
},1000); //end setInterval



//review
var swiper = new Swiper(".review-slider", {
    slidesPerView:3,
    loop:true,
    spaceBetween:10,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        550:{
            slidesPerView:2
        },
        800:{
            slidesPerView:3
        },
        1000:{
            slidesPerView:3
        },
    }
  });