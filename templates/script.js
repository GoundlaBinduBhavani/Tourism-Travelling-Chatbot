const swiper = new Swiper('.swiper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      620: {
        slidesPerView: 2
      },
      920: {
        slidesPerView: 3
      }
    }
  });