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
                $display.text(students[i].PLAYER_ID+'-'+ students[i].PLAYER_Name.toUpperCase() );
                if( i === selected ) {
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
