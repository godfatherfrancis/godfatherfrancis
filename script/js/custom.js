jQuery( document ).ready( function( $ ){

    printCredits();

	// Intro size setup

	setupIntro(); // On ready, resize intro

	$( window ).resize( function() { setupIntro(); } ); // On resize

	function setupIntro() {
		var infoBox = $('.info' );
		var titleBox = $( '.info').find('.container');
		$( '.info' ).find( '.container' ).css( 'top', ( ( infoBox.height() - titleBox.height() - 20 ) / 1.87) + 'px' );
	}

	// Full background image
	$( '.fx-backstretch' ).find( '.info' ).backstretch( 'images/water.jpg' );

    function printCredits() {
        console.log("                                                                                          \
            \n     ______          ______      __  __                 ______                      _            \
            \n    / ____/___  ____/ / __/___ _/ /_/ /_  ___  _____   / ____/________ _____  _____(_)____       \
            \n   / / __/ __ \\/ __  / /_/ __ `/ __/ __ \\/ _ \\/ ___/  / /_  / ___/ __ `/ __ \\/ ___/ / ___/   \
            \n  / /_/ / /_/ / /_/ / __/ /_/ / /_/ / / /  __/ /     / __/ / /  / /_/ / / / / /__/ (__  )        \
            \n  \\____/\\____/\\__,_/_/  \\__,_/\\__/_/ /_/\\___/_/     /_/   /_/   \\__,_/_/ /_/\\___/_/____/ \
            \n    _________________________________________________________________________________            \
            \n       ___________________________________________________________________________               \
            \n                                                                                                 \
            \nCreated by Aaron 'Godfather' Francis                                                             \
            \nAaron Francis :: Developer + Creative + Design                                                   \
            \n  >Twitter: @godfathrfrancis                                                                     \
            ");
    }

});