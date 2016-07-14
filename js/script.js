$(document).ready(function () {

    var height = $(window).height();
    var topHeight = height * 0.1;
    var bottomHeight = (height * 0.9) + 1300;
    var width = $(window).width();
    var manager_flag = 0;
    var saba7_flag = 0;
    var remove_flag = 0;
    var answera_flag = 0, answerb_flag = 0, answerc_flag = 0, answerd_flag = 0


    $('div.top').height(topHeight);
    $('div.bottom').height(bottomHeight);

    $('div.wrapper').width(width);

    $('#manager').click(function () {
        if (manager_flag == 0) {
            $('#manager_img').attr("src", "img/left/manager_X.png");


            // countdown


            // end countdown




            manager_flag = 1;
        } else if (manager_flag == 1) {
            $('#manager_img').attr("src", "img/left/ask_manager.png");
            manager_flag = 0;
        }

    });

    $('#saba7').click(function () {
        if (saba7_flag == 0) {
            $('#saba7_img').attr("src", "img/left/saba7_X.png");
            saba7_flag = 1;
        } else if (saba7_flag == 1) {
            $('#saba7_img').attr("src", "img/left/saba7.png");
            saba7_flag = 0;

        }

    });


    $('#remove').click(function () {
        if (remove_flag == 0) {
            $('#remove_img').attr("src", "img/left/5050_X.png");
            remove_flag = 1;
        } else if (remove_flag == 1) {
            $('#remove_img').attr("src", "img/left/5050.png");
            remove_flag = 0;
        }

    });




    // Questions
    var currentQuestion = 0;
    var questionIndex = 0;

    // Your list of questions. Each question has an answer (either a,b,c or d)
    // and then a set of "options" in the question

    var questions = [
        // question 0
        {
            'answer': 'c',
            'question': 'ايه أول أصناف زبادي/بودينج من دانون نزلت في مصر؟',
            'options': ['دانون بس'
                , 'أكتيفيا بس'
                , 'دانون و دانيت'
                , 'دانون و أكتيفيا']
        },
        //end question 0
        // question 1
        {
            'answer': 'b',
            'question': 'مين صاحب هدف مصر الاوحد فى كاس العالم؟',
            'options': ['كابتن مجدى'
                , 'كابتن مجدى عبد الغنى'
                , 'كابتن ماجد ..عبد الغنى'
                , 'كل ماسبق']
        },
        //end question 1

        // question 2
        {
            'answer': 'b',
            'question': 'الجبنة تترص فين في العربية؟',
            'options': ['أول ماتفتح الباب',
                'في صدر العربية على الشمال',
                'عند باب الجنب في اليمين',
                'في كابينة السواق']
        },
        //end question 2
        // question 3
        {
            'answer': 'c',
            'question': 'عدالة السماء هبطت فين ؟',
            'options': ['ستاد المحلة'
                , 'علي دماغ مجدي عبد العني'
                , 'ستاد باليرمو'
                , 'ستاد النيل']
        },
        //end question 3
        // question 4
        {
            'answer': 'c',
            'question': 'الMSL بتاع الجبنة السايبة في المدن؟',
            'options': ['كل التصنيفات',
                'A أساسي / B اختياري',
                'A, B, C',
                'D, E']
        },
        //end question 4
        // question 5
        {
            'answer': 'b',
            'question': 'كابتن مدحت شلبى بيصبغ شعره فين؟',
            'options': ['كوافير محمد الصغير',
                'هو اللى بيسبغ لنفسه',
                'عند كابتن ايمن يونس',
                'مش بيسبغ اصلا']
        },
        //end question 5
        // question 6
        {
            'answer': 'd',
            'question': 'ماهو الترتيب الصحيح لخطوات الزيارة الأولى؟',
            'options': ['إبلاغ رسالة الاستحواذ - عمل أوردر الجبنة - عمل أوردر الزبادي',
                'تحصيل الفلوس - وضع مواد الدعاية - كشف الرف',
                'كشف الرف - عمل أوردر الزبادي - و بس',
                'كشف الرف - عمل أوردر الزبادي - إبلاغ رسالة الاستحواذ']
        },
        //end question 6
        // question 7
        {
            'answer': 'd',
            'question': 'ايه النادى الوحيد اللى مدربوش كابتن فاروق جعفر',
            'options': ['ريال مدريد',
                'اليوفينتوس',
                'تشيلسى',
                'مياه البحيره']
        },
        //end question 7
        // question 8
        {
            'answer': 'b',
            'question': 'كيفية تحصيل الفلوس؟',
            'options': ['أخر الشهر',
                'نقدي',
                'بعد أسبوع',
                'ببلاش']
        },
        //end question 8
        // question 9
        {
            'answer': 'd',
            'question': 'احرف لاعب فى تاريخ الزمالك',
            'options': ['عمرو الصفتى',
                'احمد غانم سلطان',
                'حمادة طلبه',
                ' حازم امام الصغير']
        },
        //end question 9
        // question 10
        {
            'answer': 'c',
            'question': 'وحدة بيع الجبنة السايبة؟',
            'options': ['الخارطة / القالب',
                'اللحسة',
                'الجار / الجردل',
                'المنديل']
        },
        //end question 10
        // question 11
        {
            'answer': 'c',
            'question': 'اشهر كوبرى فى مصر',
            'options': ['كوبري اكتوبر',
                'كوبري اللمون',
                'حسام غالى',
                'كوبرى الفنجرى']
        },
        //end question 11
        // question 12
        {
            'answer': 'a',
            'question': 'الMSL بتاع الجبنة السايبة في الريف؟',
            'options': ['A, B أساسي / C اختياري',
                'كل التصنيفات',
                'A اختياري / B اختياري / C اختياري',
                'A']
        },
        //end question 12
        // question 13
        {
            'answer': 'c',
            'question': 'ايه الحيوان المفضل لسيادة المستشار ؟',
            'options': ['النعامة',
                'الخرارة',
                'الديك',
                'ام الخلول']
        },
        //end question 13
        // question 14
        {
            'answer': 'c',
            'question': 'ماهي فترة صلاحية التتراباك؟',
            'options': ['شهر',
                'سنة',
                'ستة أشهر',
                'زي الزبادي 14 يوم']
        },
        //end question 14
        // question 15
        {
            'answer': 'b',
            'question': 'من صاحب عبارة " العطشان يشرب من اي خرارة "',
            'options': ['المستشار',
                'سيادة المستشار',
                'مرتضي بيه',
                'مورتا ( لو انت عايز سيديهاتك تطلع )']
        },
        //end question 15
        // question 16
        {
            'answer': 'c',
            'question': 'ما هي شروط حافز ال4% للعملاء؟',
            'options': ['على الهدف: 4%',
                'MSL: 4%',
                'MSl: 2% - 2% على الهدف',
                'ثلاجات 2% - مواد دعاية 2%']
        },
        //end question 16
        // question 17
        {
            'answer': 'b',
            'question': 'ايه هي الطويلة و عااااالية ؟',
            'options': ['غادة عبد الرازق',
                'عرضية احمد فتحي',
                'هيفاء وهبي',
                'اى حاجة']
        },
        //end question 17
        // question 18
        {
            'answer': 'a',
            'question': 'ما هو إجمالي هدف التغطية؟',
            'options': ['86,500',
                '120,000',
                '50,000',
                '10,000']
        },
        //end question 18
        // question 19
        {
            'answer': '',
            'question': '',
            'options': ['',
                '',
                '',
                '']
        },
        //end question 19
        // question 20
        {
            'answer': '',
            'question': 'الMSL بتاع التترتباك؟',
            'options': ['A, B اختياري / C, D, E أساسي',
                'كل التصنيفات',
                'A, B',
                'A, B, C, D']
        },
        //end question 20
    ];


    // $('#a').text(questions[0].options['0']);
    // $('#b').text(questions[0].options['1']);
    // $('#c').text(questions[0].options['2']);
    // $('#d').text(questions[0].options['3']);

    var answer = questions[currentQuestion].answer;
    var classorange = '';

    // answers click listeners
    $('#answer-a').click(function () {
        if (answera_flag === 0) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questionselected");
            $('#orange').removeClass("questiontoprightselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').addClass("questiontopleftselected");
            classorange = $('#orange').attr("class");
            answera_flag = 1;
            answerb_flag = 0;
            answerc_flag = 0
            answerd_flag = 0;
        } else if (answera_flag === 1) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questiontoprightselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').addClass("questionselected");
            classorange = $('#orange').attr("class");
            answera_flag = 0;
            answerb_flag = 0;
            answerc_flag = 0
            answerd_flag = 0;
        }


    });
    $('#answer-b').click(function () {
        if (answerb_flag === 0) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questionselected");
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').addClass("questiontoprightselected");
            classorange = $('#orange').attr("class");
            answerb_flag = 1;
            answera_flag = 0;
            answerc_flag = 0
            answerd_flag = 0;
        } else if (answerb_flag === 1) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').removeClass("questiontoprighttselected");
            $('#orange').addClass("questionselected");
            classorange = $('#orange').attr("class");
            answerb_flag = 0;
            answera_flag = 0;
            answerc_flag = 0
            answerd_flag = 0;
        }

    });
    $('#answer-c').click(function () {
        if (answerc_flag === 0) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questionselected");
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').addClass("questionbottomleftselected");
            classorange = $('#orange').attr("class");
            answerc_flag = 1;
            answera_flag = 0;
            answerb_flag = 0
            answerd_flag = 0;
        } else if (answerc_flag === 1) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').removeClass("questiontoprightselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').addClass("questionselected");
            classorange = $('#orange').attr("class");
            answerc_flag = 0;
            answera_flag = 0;
            answerb_flag = 0
            answerd_flag = 0;
        }

    });
    $('#answer-d').click(function () {
        if (answerd_flag === 0) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questionselected");
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').addClass("questionbottomrightselected");
            classorange = $('#orange').attr("class");
            answerd_flag = 1;
            answera_flag = 0;
            answerb_flag = 0
            answerc_flag = 0;
        } else if (answerd_flag === 1) {
            $('#red').hide();
            $('#green').hide();
            $('#orange').removeClass("questiontopleftselected");
            $('#orange').removeClass("questiontoprightselected");
            $('#orange').removeClass("questionbottomrightselected");
            $('#orange').removeClass("questionbottomleftselected");
            $('#orange').addClass("questionselected");
            classorange = $('#orange').attr("class");
            answerd_flag = 0;
            answera_flag = 0;
            answerb_flag = 0
            answerc_flag = 0;
        }

    });

    // display first time first question and answers
    changeQuestionTextSize(currentQuestion);
    changeAnswerTextSize(currentQuestion);
    updateRightSidebar(currentQuestion);

    $('#q').text(questions[currentQuestion].question);
    $('#a').text(questions[currentQuestion].options['0']);
    $('#b').text(questions[currentQuestion].options['1']);
    $('#c').text(questions[currentQuestion].options['2']);
    $('#d').text(questions[currentQuestion].options['3']);




    // click on question next question click listener 
    $('#question-q').click(function () {

        //increment question index
        currentQuestion++;
        //console.log(classorange);

        //change question text size
        changeQuestionTextSize(currentQuestion);
        changeAnswerTextSize(currentQuestion);
        //get the user answered answer as a,b,c,d
        answer = getAnswer(classorange);
        //console.log(answer);
//Update righsidebar with current question
 updateRightSidebar(currentQuestion);
        //display next question and answer after timeout
        displayQuestion(currentQuestion);
        displayAnswers(currentQuestion);
isans

    });
    /**
     * function: getAnswer
     * parameter: answerID
     * It takes answerID and then return the string of the answer which will be a,b,c,d like answer in the questions array
     */
    function getAnswer(orange) {
        if (orange === 'questiontopleftselected') {

            return 'a';
        } else if (orange === 'questiontoprightselected') {
            return 'b';        
        } else if (orange === 'questionbottomleftselected') {
            return 'c';
        } else if (orange === 'questionbottomrightselected') {
            return 'd';
        }
    }

    /**
     * function: displayQuestion
     * parameter: currentQuestion
     * It takes currentQuestion as an argument and display the question from the questions array with the currentQuestion as an index
     */
    function displayQuestion(currentQuestion) {
        $('#q').text(questions[currentQuestion].question);
    }
    /**
     * function: displayAnswers
     * parameter: currentQuestion
     * It takes currentQuestion as an argument and display the answers from the questions array with the currentQuestion as an index
     */
    function displayAnswers(currentQuestion) {
        $('#a').text(questions[currentQuestion].options['0']);
        $('#b').text(questions[currentQuestion].options['1']);
        $('#c').text(questions[currentQuestion].options['2']);
        $('#d').text(questions[currentQuestion].options['3']);
        $('#orange').removeClass("questiontopleftselected");
        $('#orange').removeClass("questiontoprightselected");
        $('#orange').removeClass("questionbottomrightselected");
        $('#orange').removeClass("questionbottomleftselected");
        $('#orange').addClass("questionselected");
    }
    /**
     * function: changeQuestionTextSize
     * parameter: 
     * It changes the classes from question-text to question-text-big (smaller font-size)
     */
    function changeQuestionTextSize(currentQuestion) {
        var question = questions[currentQuestion].question;
        console.log("question # " + question);
        console.log("question string length= " + question.length);
        if (question.length > 27) {
            $('#q').removeClass('question-text');
            $('#q').addClass('question-text-big');
        } else {
            $('#q').removeClass('question-text-big');
            $('#q').addClass('question-text');
        }

    }

    /**
     * function: isQuestionCorrect(currentQuestion)
     */

   function isQuestionCorrect(currentQuestion){
       answer = getAnswer(classorange);
       if (answer===questions[currentQuestion].answer) {
                      console.log(answer +"is the answer i select where " + questions[currentQuestion].answer+ " is from the array");

           return true;
       }else {
                      console.log(answer +"is the answer i select where " + questions[currentQuestion].answer+ " is from the array");

           return false;
       }
       
       
    }

    /**
     * function updateRightSidebar
     * parameter currentQuestion
     */

    function updateRightSidebar(currentQuestion) {
    // var previousQuestionCorrect=isQuestionCorrect(currentQuestion-1);

        switch (currentQuestion) {
            case 0:
            $('img.goal1').attr('src','img/right/current_question.png');
            
                break;
            case 1:
            $('img.goal2').attr('src','img/right/current_question.png');
            if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal1').attr('src','img/right/answered.png');
            }else{
            $('img.goal1').attr('src','img/right/not_answered.png');
            }
                break;
            case 2:
            $('img.goal3').attr('src','img/right/current_question.png');
             if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal2').attr('src','img/right/answered.png');
            }else{
            $('img.goal2').attr('src','img/right/not_answered.png');
            }
                break;
            case 3:
            $('img.goal4').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal3').attr('src','img/right/answered.png');
            }else{
            $('img.goal3').attr('src','img/right/not_answered.png');
            }
                break;
            case 4:
            $('img.goal5').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal4').attr('src','img/right/answered.png');
            }else{
            $('img.goal4').attr('src','img/right/not_answered.png');
            }
                break;
            case 5:
            $('img.goal6').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal5').attr('src','img/right/answered.png');
            }else{
            $('img.goal5').attr('src','img/right/not_answered.png');
            }
                break;
            case 6:
            $('img.goal7').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal6').attr('src','img/right/answered.png');
            }else{
            $('img.goal6').attr('src','img/right/not_answered.png');
            }
                break;
            case 7:
            $('img.goal8').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal7').attr('src','img/right/answered.png');
            }else{
            $('img.goal7').attr('src','img/right/not_answered.png');
            }
                break;
            case 8:
            $('img.goal9').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal8').attr('src','img/right/answered.png');
            }else{
            $('img.goal8').attr('src','img/right/not_answered.png');
            }
                break;
            case 9:
            $('img.goal10').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal9').attr('src','img/right/answered.png');
            }else{
            $('img.goal9').attr('src','img/right/not_answered.png');
            }
                break;
            case 10:
            $('img.goal11').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal10').attr('src','img/right/answered.png');
            }else{
            $('img.goal10').attr('src','img/right/not_answered.png');
            }
                break;
            case 11:
            $('img.goal12').attr('src','img/right/current_question.png');
 if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal11').attr('src','img/right/answered.png');
            }else{
            $('img.goal11').attr('src','img/right/not_answered.png');
            }
                break;
            case 12:
            $('img.goal13').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal12').attr('src','img/right/answered.png');
            }else{
            $('img.goal12').attr('src','img/right/not_answered.png');
            }
                break;
            case 13:
            $('img.goal14').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal13').attr('src','img/right/answered.png');
            }else{
            $('img.goal13').attr('src','img/right/not_answered.png');
            }
                break;
            case 14:
            $('img.goal15').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal14').attr('src','img/right/answered.png');
            }else{
            $('img.goal14').attr('src','img/right/not_answered.png');
            }
                break;
           
            case 15:
            $('img.goal16').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal15').attr('src','img/right/answered.png');
            }else{
            $('img.goal15').attr('src','img/right/not_answered.png');
            }
                break;
            case 16:
            $('img.goal17').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal16').attr('src','img/right/answered.png');
            }else{
            $('img.goal16').attr('src','img/right/not_answered.png');
            }
                break;
            case 17:
            $('img.goal18').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal17').attr('src','img/right/answered.png');
            }else{
            $('img.goal17').attr('src','img/right/not_answered.png');
            }
                break;
            case 18:
            $('img.goal19').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal18').attr('src','img/right/answered.png');
            }else{
            $('img.goal18').attr('src','img/right/not_answered.png');
            }
                break;
            case 19:
            $('img.goal20').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal19').attr('src','img/right/answered.png');
            }else{
            $('img.goal19').attr('src','img/right/not_answered.png');
            }
                break;
            case 20:
            $('img.goal21').attr('src','img/right/current_question.png');
if (isQuestionCorrect(currentQuestion-1)) {
            $('img.goal20').attr('src','img/right/answered.png');
            }else{
            $('img.goal20').attr('src','img/right/not_answered.png');
            }
                break;

            default:
                        $('img.goal1').attr('src','img/right/current_question.png');

                break;
        }
    }
    /**
     * function: changeAnswerTextSize
     * parameter: answer
     * It changes the classes from question-text to question-text-big (smaller font-size)
     */
    function changeAnswerTextSize(currentQuestion) {
        console.log("first answer length: " + questions[currentQuestion].options[0].length);
        if (questions[currentQuestion].options[0].length > 22) {
            $('#a').removeClass('answer-text1');
            $('#a').addClass('answer-text1-big');
        } else {
            $('#a').removeClass('answer-text1-big');
            $('#a').addClass('answer-text1');
        }
        if (questions[currentQuestion].options[1].length > 22) {
            $('#b').removeClass('answer-text2');
            $('#b').addClass('answer-text2-big');
        } else {
            $('#b').removeClass('answer-text2-big');
            $('#b').addClass('answer-text2');
        }
        if (questions[currentQuestion].options[2].length > 22) {
            $('#c').removeClass('answer-text3');
            $('#c').addClass('answer-text3-big');
        } else {
            $('#c').removeClass('answer-text3-big');
            $('#c').addClass('answer-text3');
        }
        if (questions[currentQuestion].options[3].length > 22) {
            $('#d').removeClass('answer-text4');
            $('#d').addClass('answer-text4-big');
        } else {
            $('#d').removeClass('answer-text4-big');
            $('#d').addClass('answer-text4');
        }

    }

    /**
     * function :answerIsCorrect(currentQuestion,answerID)
     * parameter: currentQuestion and answerID
     */
    function answerIsCorrect(currentQuestion, answerID) {

        //replace orange with green
        if (answerID === 'a' && answer === 'a') {
            $('#orange').hide();
            $('#red').hide();
            $('#green').addClass("questiontopleftselected");
        } else if (answerID === 'b' && answer === 'b') {
            $('#orange').hide();
            $('#red').hide();
            $('#green').addClass("questiontoprightselected");
        } else if (answerID === 'c' && answer === 'c') {
            $('#orange').hide();
            $('#red').hide();
            $('#green').addClass("questionbottomleftselected");
        } else if (answerID === 'd' && answer === 'd') {
            $('#orange').hide();
            $('#red').hide();
            $('#green').addClass("questionbottomrightselected");
        }
    }


    /**
    * function :answerIsWrong(currentQuestion,answerID)
    * parameter: currentQuestion and answerID
    */
    function answerIsWrong(currentQuestion, answerID) {

        //replace orange with green
        if (answerID === 'a' && answer != 'a') {
            $('#orange').hide();
            $('#green').hide();
            $('#red').addClass("questiontopleftselected");
        } else if (answerID === 'b' && answer != 'b') {
            $('#orange').hide();
            $('#green').hide();
            $('#red').addClass("questiontoprightselected");
        } else if (answerID === 'c' && answer != 'c') {
            $('#orange').hide();
            $('#green').hide();
            $('#red').addClass("questionbottomleftselected");
        } else if (answerID === 'd' && answer != 'd') {
            $('#orange').hide();
            $('#green').hide();
            $('#red').addClass("questionbottomrightselected");
        }
    }
});
