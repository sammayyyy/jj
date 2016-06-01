// indicator.js

indi( $('.indi'), $('.bannerBox') );
indi( indi, banBox );

function indi(){
    var indiBtn = $('.indi').find('li');
    indiBtn.on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var indexNum = $this.index();
        var banLi = $('.bannerBox').find('li').width();
        var banAni = indexNum * banLi;
        $('.bannerBox').animate({'margin-left': -banAni }, 500);
    });
};
