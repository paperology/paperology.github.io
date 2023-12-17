(function($) {

    // Remove no-js class
    $('html').removeClass('no-js');

    $(".label").mousedown(function(e){
        $(this).addClass("active");
    }).mouseclick(funtion(e){
        $(this).removeClass("active")
    }).mouseout(function(){
        $(this).removeClass("active");
    });

})(jQuery);
