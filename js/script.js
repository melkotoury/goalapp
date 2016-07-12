$( document ).ready(function() {

    var height = $(window).height();
    var topHeight= height *0.1;
    var bottomHeight=  (height*0.9)+1300;
         var width=$(window).width();


    $('div.top').height(topHeight);
     $('div.bottom').height(bottomHeight);

$('div.wrapper').width(width);

$('#manager').click(function(){
$('#wrong1').toggle();
});

$('#saba7').click(function(){
$('#wrong2').toggle();
});


$('#remove').click(function(){
$('#wrong3').toggle();
});


});
