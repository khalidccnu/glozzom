// Navbar Toggle
function navbar_toggle() {
    if (!$('.navbar-toggler').hasClass('collapsed')) {
        $('.navbar-toggler i').removeClass('fa-outdent').addClass('fa-indent');
    } else {
        $('.navbar-toggler i').removeClass('fa-indent').addClass('fa-outdent');
    }
}