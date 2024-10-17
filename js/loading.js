// $(window).on('load', function() {
//     // Hide loader after content is fully loaded
//     $('#loader').fadeOut('slow', function() {
//       $(this).addClass('hidden');
//     });
  
//     // 原有的 Portfolio 初始化邏輯
//     var $container = $('.portfolioContainer'),
//         $body = $('body'),
//         colW = 620,
//         columns = null;
  
//     $container.isotope({
//       resizable: true,
//       masonry: {
//         columnWidth: colW
//       }
//     });
    
//     // Window resize handler to adjust layout
//     $(window).smartresize(function(){
//       var currentColumns = Math.floor(($body.width() - 30) / colW);
//       if (currentColumns !== columns) {
//         columns = currentColumns;
//         $container.width(columns * colW).isotope('reLayout');
//       }
//     }).smartresize();
    
//     $('.portfolioFilter a').click(function(){
//       $('.portfolioFilter .current').removeClass('current');
//       $(this).addClass('current');
//       var selector = $(this).attr('data-filter');
//       $container.isotope({
//         filter: selector,
//       });
//       return false;
//     });
//   });
  