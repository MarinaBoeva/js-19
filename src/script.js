$(function() {
    $('.jcarousel').jcarousel({
      scroll:1,
      wrap:"circular",
      list: '.jcarousel-list'
    });
    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
          $('.jcarousel-pagination >a').eq(0).addClass('active');
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });
    $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });
});
