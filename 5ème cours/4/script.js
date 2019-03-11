'use strict'


$('#js-show-alert').click(() => {
    $('#js-alert').show();
});

$('#js-hide-alert').click(() => {
    $('#js-alert').hide();
})

$('#js-slide-example-address').click(() => {
    //$('#js-slide-example-links').slideDown(); // afficher
    //$('#js-slide-example-links').fadeIn(); //afficher
    //$('#js-slide-example-links').fadeOut() // cacher
    //$('#js-slide-example-links').slidetoggle(); // afficher /cacher
    $('#js-slide-example-links').fadeToggle(); // afficher / cacher
})