$(document).ready(function(){
    var h = $('#header'),
        a = $('#article'),
        s = $('#section'),
        f = $('#footer');

    
    $(window).on('scroll',function(){
        var wh = $(window).height();
        var ws = $(window).scrollTop();
        var header_h = $('#header').height();
       
        var lh = wh - header_h;
        
        h.text(ws);
        
        if(ws >= lh){
            h.addClass('scroll');
        }else{
            h.removeClass('scroll');
        };
        
        /*((ws >= lh) ? h.addClass('scroll') : h.removeClass('scroll'));*/
        // 위에꺼랑 같은 뜻
    });
    
    var btn = $('button');
    btn.hide();
    $(window).on('scroll',function(){
    
        var sc = $(this).scrollTop();         
        
        if(sc <= 500){
                btn.fadeOut(500);
        }else{
                btn.fadeIn(500);
        };
    }); // scroll
    
    btn.on('click', function(){
        $('html,body').animate({'scrollTop':0},500);
    });
    
    h.find('ul').find('li').on('click', function(){
        $('html, body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
        
});