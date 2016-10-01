var menuOpen = false;

function menu (){
  if (menuOpen) {
    $('#container').css("margin-left","0vw");
    $('.one').css('margin-top','0px').css('margin-bottom','7px').css('transform','rotate(0deg)');
      $('.two').css('margin-top','0px').css('margin-bottom','7px').css('display','block');
        $('.three').css('margin-top','0px').css('margin-top','0px').css('margin-bottom','7px').css('transform','rotate(0deg)');
    menuOpen=false;
  }else{
    $('#container').css("margin-left","-75vw");
    $('.one').css('margin','0').css('margin-top','8px').css('transform','rotate(45deg)');
      $('.two').css('margin','0').css('display','none');
        $('.three').css('margin','0').css('margin-top','-8px').css('transform','rotate(-45deg)');
    menuOpen=true;
  }
}
if($(window).width()>800){
var elementPosition = $('#main_nav').offset();

$(window).scroll(function () {
    if ($(window).scrollTop() > (elementPosition.top)) {
        $('#main_nav').css('position', 'fixed').css('margin-top', '0').css('top', '0').css('width','100%').css('left','0');
        $('#container').css('padding-top','0px');
    } else {
        $('#main_nav').css('position', 'static').css('margin-top', '50px').css('top', '0').css('width','100%');
        $('#container').css('padding-top','50px');
    }
 });
}

var $container = $('.news-img-wrap');
var $container2 = $('.news-list-view');
$(document).ready(function(){
  $container.imagesLoaded( function(){
    $container.masonry({
      itemSelector : '.lightbox'
    });
  });

  $container2.imagesLoaded( function(){
    $container2.masonry({
      itemSelector : '.article',
      gutter:10
    });
  });
});
