
$(function (){
    const swiper = new Swiper('.index_swiper_4_1', 
        {
        // Optional parameters
        slidesPerView: 1,
        direction: 'horizontal',        
        loop: true,
        spaceBetween : 32,  
        // centeredSlides: true,   // 當前 slide 置中
        

        // // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },

        breakpoints: { 
          //當寬度 >= 768
          768: { 
            slidesPerView: 2,
            spaceBetween : 16,
          }, 
          1366: { 
            slidesPerView: 3,
            spaceBetween : 16,
          },         
        },

        }
    );
});