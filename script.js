$(document).ready(function() {
    $('#myForm').validate({
        rules: {
            creditCard: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            cvv: {
                required: true,
                digits: true,
                minlength: 3,
                maxlength: 3
            }
        },
        messages: {
            creditCard: {
                required: "Please enter a 10-digit credit card number",
                digits: "Please enter only digits",
                minlength: "Please enter at least 10 digits",
                maxlength: "Please enter at most 10 digits"
            },
            cvv: {
                required: "Please enter a 3-digit CVV",
                digits: "Please enter only digits",
                minlength: "Please enter exactly 3 digits",
                maxlength: "Please enter exactly 3 digits"
            }
        }
    });

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
