//check to connectivity code
console.log("connect properly");
//code for header 
const my_header = document.querySelector("#my_header");

    window.addEventListener('scroll',()=>{

            if(window.scrollY >= 100)
            {
                my_header.classList.add("scroll-header");
            }
            else if(window.scrollY < 100)
            {
                my_header.classList.remove("scroll-header");
            }
            
    });



//code for swiper 

new Swiper('.swiper-wrapper', {
    // Optional parameters
  
    loop: true,
    gapCursor: true,
    spaceBetween:20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    breakpoints: {
        0: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 3
        }
        ,
        1200: {
            slidesPerView: 3
        }
    }
  });





// code for aos 
AOS.init();