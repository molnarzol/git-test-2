/**
 * Created by User on 2016.04.12..
 */
$( document ).ready(function() {
    console.log( "ready!" );

    $( "#show-login" ).click(function() {
        if ( $( ".login-box" ).hasClass("opened") ) {
            $( ".login-box" ).removeClass("opened").slideUp( "slow", function() {
                // Animation complete.
            });
        } else {
            $( ".login-box" ).addClass("opened").slideDown( "slow", function() {
                // Animation complete.
            });
        }
    });
});
