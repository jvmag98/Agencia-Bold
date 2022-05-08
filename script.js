
$('.container-slider').slick({
    dots:true,
    arrows:false,
    infinite:true,
    centerPadding:0,
    speed:1000,
    slidesToShow:3,
    slidesToScroll:3,
    autoplay:true,
    autoplaySpeed:3000,
    pauseOnHover:false,
    responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }],
});


var menubtn = document.querySelector('.itens-menu-mobile i');
menubtn.addEventListener('click',()=>{
let itemsMenu = document.querySelector('.menu-mobile');
if(itemsMenu.classList.contains('show')){
    itemsMenu.classList.remove('show');
    itemsMenu.classList.add('hide');
}else{
    itemsMenu.classList.remove('hide');
    itemsMenu.classList.add('show');
}
})

$('a').click(function(){
$('html, body').animate({
scrollTop: $( $(this).attr('href') ).offset().top
}, 1000);
return false;
});