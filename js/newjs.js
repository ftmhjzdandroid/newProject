$(document).ready(function() {
    $('.collapse').on('show.bs.collapse', function() {
        $('.how-i-better').removeClass('active')
        var HowIBetter = $(this).parent('.how-i-better')
        HowIBetter.addClass('active')
    });

    $('.collapse').on('show.bs.collapse', function() {
        $('.solutions-choise').removeClass('active')
        var HowIBetter = $(this).parent('.solutions-choise')
        HowIBetter.addClass('active')
    });



    $('#navbar i').click(function() {
        if ($('.search-box-header').hasClass('active')) {
            $('.search-box-header').css('display', 'block')
            $('.search-box-header').animate({
                width: '+=150px'
            })
            $('.search-box-header').removeClass('active')
        } else {
            $('.search-box-header').addClass('active')
            $('.search-box-header').animate({
                width: '-=150'
            })
            $('.search-box-header').css('display', 'none')
            $('.search-box-header').addClass('active')
        }

    });
    $('.navbar-toggler-icon').click(function() {
        $('.search-box-header').css('display', 'block')
    })
});