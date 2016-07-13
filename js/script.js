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




// Questions
var currentQuestion=null;
var questionIndex=0;

// Your list of questions. Each question has an answer (either a,b,c or d)
// and then a set of "options" in the question

var questions = [
    // question 1
    {
        'answer' : 'b',
        'question' : 'مين صاحب هدف مصر الاوحد فى كاس العالم؟',
        'options' : ['كابتن مجدى'
        ,'كابتن مجدى عبد الغنى'
        ,'كابتن ماجد ..عبد الغنى'
        ,'كل ماسبق']
    },
    //end question 1

        // question 2
    {
        'answer' : '',
        'question' : '',
        'options' : ['','','','']
    },
    //end question 2
          // question 3
    {
        'answer' : 'عدالة السماء هبطت فين ؟',
        'question' : 'c',
        'options' : ['ستاد المحلة'
        ,'علي دماغ مجدي عبد العني'
        ,'ستاد باليرمو'
        ,'ستاد النيل']
    },
    //end question 3
          // question 4
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 4
          // question 5
    {
        'answer' : 'b',
        'question' : 'كابتن مدحت شلبى بيصبغ شعره فين؟',
        'options' : ['كوافير محمد الصغير',
        'هو اللى بيسبغ لنفسه',
        'عند كابتن ايمن يونس',
        'مش بيسبغ اصلا']
    },
    //end question 5
          // question 6
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 6
          // question 7
    {
        'answer' : 'd',
        'question' : 'ايه النادى الوحيد اللى مدربوش كابتن فاروق جعفر',
        'options' : ['ريال مدريد',
        'اليوفينتوس',
        'تشيلسى',
        'مياه البحيره']
    },
    //end question 7
          // question 8
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 8
          // question 9
    {
        'answer' : 'd',
        'question' : 'احرف لاعب فى تاريخ الزمالك',
        'options' : ['عمرو الصفتى',
        'احمد غانم سلطان',
        'حمادة طلبه',
        ' حازم امام الصغير']
    },
    //end question 9
          // question 10
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 10
          // question 11
    {
        'answer' : 'c',
        'question' : 'اشهر كوبرى فى مصر',
        'options' : ['كوبري اكتوبر',
        'كوبري اللمون',
        'حسام غالى',
        'كوبرى الفنجرى']
    },
    //end question 11
          // question 12
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 12
          // question 13
    {
        'answer' : 'c',
        'question' : 'ايه الحيوان المفضل لسيادة المستشار ؟',
        'options' : ['النعامة',
        'الخرارة',
        'الديك',
        'ام الخلول']
    },
    //end question 13
          // question 14
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 14
          // question 15
    {
        'answer' : 'b',
        'question' : 'من صاحب عبارة " العطشان يشرب من اي خرارة "',
        'options' : ['المستشار',
        'سيادة المستشار',
        'مرتضي بيه',
        'مورتا ( لو انت عايز سيديهاتك تطلع )']
    },
    //end question 15
          // question 16
    {
        'answer' : '',
        'question' : '',
        'options' : ['',
        '',
        '',
        '']
    },
    //end question 16
          // question 17
    {
        'answer' : 'b',
        'question' : 'ايه هي الطويلة و عااااالية ؟',
        'options' : ['غادة عبد الرازق',
        'عرضية احمد فتحي',
        'هيفاء وهبي',
        'اى حاجة']
    },
    //end question 17
          // question 18
    {
        'answer' : '',
        'question' : '',
        'options' : ['','','','']
    },
    //end question 18
          // question 19
    {
        'answer' : '',
        'question' : '',
        'options' : ['','','','']
    },
    //end question 19
          // question 20
    {
        'answer' : '',
        'question' : '',
        'options' : ['','','','']
    },
    //end question 20
];


});
