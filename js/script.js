$(document).ready(function() {
   $('.slider').slick({
       arrows: true,
       dots: true,
       slidesToShow: 2,
       autoplay: false,
       speed: 1000,
       autoplaySpeed: 800,
       responsive: [
         {
            breakpoint: 991,
            settings: {
                slidesToShow: 1
            }
        },{
               breakpoint: 768,
               settings: {
                   slidesToShow: 1
               }
           },
           {
               breakpoint: 550,
               settings: {
                   slidesToShow: 1
               }
           }
       ]
   });
});