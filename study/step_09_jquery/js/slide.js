// slide.js

function slideBanner(){
	var b_box = $('.banner_box'),
        b_box_ul = b_box.children('ul'),
        b_box_li = b_box_ul.find('li'),
        b_box_li_width = b_box_ul.find('li').width(),
        l_btn = $('.btn_left'),
        r_btn = $('.btn_right');

// $('.banner_box').find('li').last().prependTo('.banner_box>ul');
b_box_li.last().prependTo(b_box_ul);

l_btn.on('click', function(){
    var b_li = b_box.find('li');
    b_li.first().stop().animate({'margin-left': b_box_li_width}, 700, function(){
    b_li.css({'margin-left':0})
        .last().prependTo(b_box_ul);
    });
});
r_btn.on('click', function(){
    var b_li = b_box.find('li');
    b_li.first().stop().animate({'margin-left':-b_box_li_width }, 700, function(){
    b_li.css({'margin-left':0})
        .first().appendTo(b_box_ul);
    });
});

}// slidebanner