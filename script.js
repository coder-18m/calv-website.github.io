$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".ul-li-ul");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass(".ul-li-ul")) {
        $navbar.collapse('hide');
    }
});
