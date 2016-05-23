/*           onepage.js            */
$(function(){
    
    var btn = $('button');
    btn.hide();
    $(window).on('scroll',function(){
    
        var sc = $(this).scrollTop(); /* 스크롤 했을때 스크롤 값을 가져온다 */
        var of = $('.offset').offset().top; /*  얼마나 떨어져 있나  */
        $('.scrollTop').find('span').text(sc);
        $('.offset').find('span').text(of);
        
        
        if(sc <= 500){
            btn.fadeOut(500);
        }else{
            btn.fadeIn(500);
        };
    }); // scroll
    
    btn.on('click', function(){
        $('html,body').animate({'scrollTop':0},500);
    });
    
})