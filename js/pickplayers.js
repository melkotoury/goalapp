// test case for http://stackoverflow.com/questions/9464555/js-jquery-animated-random-name-picker

var students = [
    { 'PLAYER_ID': 0, 'PLAYER_Name': "one" },
    { 'PLAYER_ID': 1, 'PLAYER_Name': "two" },
    { 'PLAYER_ID': 2, 'PLAYER_Name': "three" },
    { 'PLAYER_ID': 3, 'PLAYER_Name': "four" },
    { 'PLAYER_ID': 4, 'PLAYER_Name': "five" },
    { 'PLAYER_ID': 5, 'PLAYER_Name': "six" },
    { 'PLAYER_ID': 6, 'PLAYER_Name': "Seven" },
    { 'PLAYER_ID': 7, 'PLAYER_Name': "Eight" },
    { 'PLAYER_ID': 8, 'PLAYER_Name': "Nine" },
    { 'PLAYER_ID': 9, 'PLAYER_Name': "Ten" },
    { 'PLAYER_ID': 10, 'PLAYER_Name': "Eleven" },
    { 'PLAYER_ID': 11, 'PLAYER_Name': "Twelve" },
    { 'PLAYER_ID': 12, 'PLAYER_Name': "Thirteen" },
    { 'PLAYER_ID': 13, 'PLAYER_Name': "Fourteen" },
    { 'PLAYER_ID':14, 'PLAYER_Name': "Fifteen" },
    { 'PLAYER_ID': 15, 'PLAYER_Name': "Sixteen" },
    { 'PLAYER_ID': 16, 'PLAYER_Name': "Seventeen" },
    { 'PLAYER_ID': 17, 'PLAYER_Name': "Eighteen" },
    { 'PLAYER_ID':18, 'PLAYER_Name': "Nineteen" },
    { 'PLAYER_ID':19, 'PLAYER_Name': "Twenty" },
    { 'PLAYER_ID':20, 'PLAYER_Name': "Twenty One" },
    { 'PLAYER_ID':21, 'PLAYER_Name': "Twenty Two" },
    { 'PLAYER_ID':22, 'PLAYER_Name': "Twenty Three" },
    { 'PLAYER_ID':23, 'PLAYER_Name': "Twenty Four" },
    { 'PLAYER_ID':24, 'PLAYER_Name': "Twenty Five" },
    { 'PLAYER_ID':25, 'PLAYER_Name': "Twenty Six" },
    { 'PLAYER_ID':26, 'PLAYER_Name': "Twenty Seven" },
    { 'PLAYER_ID':27, 'PLAYER_Name': "Twenty Eight" },
     { 'PLAYER_ID':28, 'PLAYER_Name': "Twenty Nine" },
    { 'PLAYER_ID':29, 'PLAYER_Name': "Thirty" },
];

var $display = $("#display");
var $display1 = $("#display1");
var $display2 = $("#display2");
var $display3 = $("#display3");
var $display4 = $("#display4");
var $display5 = $("#display5");
var $display6 = $("#display6");
var $display7 = $("#display7");
var $display8 = $("#display8");
var $display9 = $("#display9");



// first player
$('#random').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                     && $display.text() != $display1.text()
                      && $display.text() != $display2.text()
                       && $display.text() != $display3.text()
                        && $display.text() != $display4.text()
                         && $display.text() != $display5.text()
                          && $display.text() != $display6.text()
                           && $display.text() != $display7.text() 
                            && $display.text() != $display8.text()
                              && $display.text() != $display9.text()

                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// End first player

// Second Player

$('#random1').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display1.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display1.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display1.text() != $display.text()
                     && $display1.text() != $display2.text()
                      && $display1.text() != $display3.text()
                       && $display1.text() != $display4.text()
                        && $display1.text() != $display5.text()
                         && $display1.text() != $display6.text()
                          && $display1.text() != $display7.text()
                           && $display1.text() != $display8.text() 
                            && $display1.text() != $display9.text()
                
                
                
                
                 ){
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display1.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Second Player

// Third Player

$('#random2').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display2.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display2.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display2.text() != $display.text()
                     && $display2.text() != $display1.text()
                      && $display2.text() != $display3.text()
                       && $display2.text() != $display4.text()
                        && $display2.text() != $display5.text()
                         && $display2.text() != $display6.text()
                          && $display2.text() != $display7.text()
                           && $display2.text() != $display8.text() 
                            && $display2.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display2.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Third Player

// Fourth Player

$('#random3').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display3.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display3.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display3.text() != $display.text()
                     && $display3.text() != $display1.text()
                      && $display3.text() != $display2.text()
                       && $display3.text() != $display4.text()
                        && $display3.text() != $display5.text()
                         && $display3.text() != $display6.text()
                          && $display3.text() != $display7.text()
                           && $display3.text() != $display8.text() 
                            && $display3.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display3.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Fourth Player


// Fifth Player

$('#random4').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display4.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display4.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display4.text() != $display.text()
                     && $display4.text() != $display1.text()
                      && $display4.text() != $display2.text()
                       && $display4.text() != $display3.text()
                        && $display4.text() != $display5.text()
                         && $display4.text() != $display6.text()
                          && $display4.text() != $display7.text()
                           && $display4.text() != $display8.text() 
                            && $display4.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display4.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Fifth Player

// Sixth Player

$('#random5').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display5.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display5.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected  
                    && $display5.text() != $display.text()
                     && $display5.text() != $display1.text()
                      && $display5.text() != $display2.text()
                       && $display5.text() != $display3.text()
                        && $display5.text() != $display4.text()
                         && $display5.text() != $display6.text()
                          && $display5.text() != $display7.text()
                           && $display5.text() != $display8.text() 
                            && $display5.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display5.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Sixth Player

// Seventh Player

$('#random6').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display6.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display6.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display6.text() != $display.text()
                     && $display6.text() != $display1.text()
                      && $display6.text() != $display2.text()
                       && $display6.text() != $display3.text()
                        && $display6.text() != $display4.text()
                         && $display6.text() != $display5.text()
                          && $display6.text() != $display7.text()
                           && $display6.text() != $display8.text() 
                            && $display6.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display6.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Seventh Player
// Eighth Player

$('#random7').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display7.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display7.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display7.text() != $display.text()
                     && $display7.text() != $display1.text()
                      && $display7.text() != $display2.text()
                       && $display7.text() != $display3.text()
                        && $display7.text() != $display4.text()
                         && $display7.text() != $display5.text()
                          && $display7.text() != $display6.text()
                           && $display7.text() != $display8.text() 
                            && $display7.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display7.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Eighth Player

// Ninth Player

$('#random8').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display8.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display8.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected   
                    && $display8.text() != $display.text()
                     && $display8.text() != $display1.text()
                      && $display8.text() != $display2.text()
                       && $display8.text() != $display3.text()
                        && $display8.text() != $display4.text()
                         && $display8.text() != $display5.text()
                          && $display8.text() != $display6.text()
                           && $display8.text() != $display7.text() 
                            && $display8.text() != $display9.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display8.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Ninth Player
// Tenth Player

$('#random9').click(function(){
    var total = students.length,
        selected = Math.floor( Math.random() * total ),
        i = 0;

    console.log( "selected", selected );
    //$display.animate( {"font-size": "12px"}, 0 );
    // or
    $display9.removeClass( "winner" );
   


    // improvement: use a for loop instead of a for..in
    for (i=0; i<total; i++) {

        console.log( "for", i );
        // here is the trick, use an Immediately-Invoked Function Expression (IIFE)
        // see http://benalman.com/news/2010/11/immediately-invoked-function-expression/
        // play with the two button "IIFE" and "No IIFE" to see why this is important
        setTimeout((function(i){
            return function(){
                // code here will be delayed
                console.log( "timeout", i );
                //$display.text( students[i].PLAYER_ID);
                $display9.text(students[i].PLAYER_ID+1+'-'+ students[i].PLAYER_Name.toUpperCase() );
               

                if( i === selected 
                    && $display9.text() != $display.text()
                     && $display9.text() != $display1.text()
                      && $display9.text() != $display2.text()
                       && $display9.text() != $display3.text()
                        && $display9.text() != $display4.text()
                         && $display9.text() != $display5.text()
                          && $display9.text() != $display6.text()
                           && $display9.text() != $display7.text() 
                            && $display9.text() != $display8.text()
                
                
                
                
                 ) {
                    //$display.animate( {"font-size": "30px"}, "fast" );
                    // or
                    $display9.addClass( "winner" );
                  

                }
            };
        }(i)), i*250);

        // improvement: triple equal sign, always !
        if( i === selected ) {
            // code here will execute immediately
            break;
        }
    }

});
// end Tenth Player
