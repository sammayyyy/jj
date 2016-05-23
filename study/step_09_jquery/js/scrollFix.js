$(document).ready(function(){
    var h = $('#header'),
        a = $('#article'),
        s = $('#section'),
        f = $('#footer');
    
    var wh = $(window).scrollTop();
    
    $(window).on('scroll',function(){
        var wh = $(window).height();
        var ws = $(window).scrollTop();
        var header_h = $('#header').height();
        
        var hh = header_h + 20;
        var lh = wh - hh;
        
        h.text(ws);
        /*if(ws >= lh){
            h.addClass('scroll');
        }else{
            h.removeClass('scroll');
        };
        */
        
        ((ws >= lh) ? h.addClass('scroll') : h.removeClass('scroll'));
        // 위에꺼랑 같은 뜻
    });
});