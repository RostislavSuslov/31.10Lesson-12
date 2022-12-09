$(document).ready(function () {
    $('.phone').mask('+38(000)00-00-000');
    $('select').niceSelect()


    $('#password').on('click', function () {
        $('.show-hide').addClass('d-block')
    })

    $(document).click(function (event) {
        if (!$(event.target).is("#password, .show-hide")) {
            $(".show-hide").removeClass('d-block');
        }
    })

    $('.show-hide').on('click', function () {
        if ($('#password[type=password]').length) {
            $('#password').attr("type", "text");
        } else {
            $('#password').attr("type", "password");
        }
    })

});