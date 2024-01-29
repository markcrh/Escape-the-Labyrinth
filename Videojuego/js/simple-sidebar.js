/*************/
/* SIDEBAR   */
/*************/
$('body').attr('id', 'menu-lateral');


function toggleSidebar(side) {
    if($("#menu-lateral").hasClass("toggle-" + (side === "right" ? "left" : "right"))) {
        $("#menu-lateral").toggleClass("toggle-" + side);
        $("#menu-lateral").toggleClass("toggle-" + (side === "right" ? "left" : "right"));

    }
    else {
        $("#manto-movil").toggleClass("toogled");
        $("#menu-lateral").toggleClass("toggled");
        $("#menu-lateral").toggleClass("toggle-" + side);
    }
}

$('.left-toggle').on('click', function(e) {
    toggleSidebar("left");
});

$('.right-toggle').on('click', function(e) {
    toggleSidebar("right");
    // return false;
});

$('#manto-movil').on('click', function(e) {
    if($("#menu-lateral").hasClass("toggle-right")) {
        toggleSidebar("right");
    } else if( $("#menu-lateral").hasClass("toggle-left") ){
        toggleSidebar("left");
    }
    
});