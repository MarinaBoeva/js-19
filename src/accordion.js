$(function() {
   $(".accordion__header").on('click',function() {
     $(this).toggleClass('active');
     if($(this).next("div").is(":visible")){
       $(this).next("div").slideUp("slow");
       $(this).children('p').children('span').html('+');
     } else {
       $(".accordion__content").slideUp("slow");
       $(this).next("div").slideToggle("slow");
       $(this).children('p').children('span').html('-');
    }
  });
});
