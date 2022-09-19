
// 햄버거 메뉴

$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });


 $('#toggle2').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
 });

 

//  스크롤 앵커 이동
function scrollNav() {
    $('.menu-text a').click(function(){
      $(".active").removeClass("active");     
      $(this).addClass("active");
      
      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 0
      }, 200);
      return false;
    });
  }
  scrollNav();



  $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});



// 헤더 스크롤
console.clear();

function TopBar__init() {
  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();

    if ( scrollTop == 0 ) {
      $('.menu_section').removeClass('hover');
    }
    else {
      $('.menu_section').addClass('hover');
    }
  });
}

TopBar__init();

