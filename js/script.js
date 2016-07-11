$( document ).ready(function() {

    var height = $(window).height();
    var topHeight= height *0.1;
    var bottomHeight=  (height*0.9)+500;

    $('div.top').height(topHeight);
     $('div.bottom').height(bottomHeight);

$('div.wrong').display();

});
