$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        infinite: true, 
        slidesToShow: 4,
        slidesToScroll: 1, 
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carus-left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/carus-right.svg"></button>',
    });
  });
 

/* var slider = tns({
    container: '.carousel__inner',
    items: 3,
    slideBy: 'page',
    autoplay: true
  });
 */