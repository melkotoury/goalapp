$( document ).ready(function() {

    var height = $(window).height();
    var topHeight= height *0.1;
    var bottomHeight=  (height*0.9)+1300;
    var width=$(window).width();
    var manager_flag=0;
    var saba7_flag=0;
    var remove_flag=0;


    $('div.top').height(topHeight);
     $('div.bottom').height(bottomHeight);

$('div.wrapper').width(width);

$('#manager').click(function(){
    if (manager_flag==0) {
        $('#manager_img').attr("src", "img/left/manager_X.png");
        manager_flag=1;
    }else if(manager_flag==1){
     $('#manager_img').attr("src", "img/left/ask_manager.png");
    manager_flag=0;
    }

});

$('#saba7').click(function(){
    if (saba7_flag==0) {
        $('#saba7_img').attr("src", "img/left/saba7_X.png");
        saba7_flag=1;
    } else if(saba7_flag==1) {
       $('#saba7_img').attr("src", "img/left/saba7.png");
       saba7_flag=0;

    }

});


$('#remove').click(function(){
    if(remove_flag==0){
                $('#remove_img').attr("src", "img/left/5050_X.png");
                remove_flag=1;
    }else if(remove_flag==1){
        $('#remove_img').attr("src", "img/left/5050.png");
        remove_flag=0;
    }

});


});
