let swiper1 = document.querySelector('.slider-container');
let swiper2 = document.querySelector('.swiper-container')
let burger = document.querySelector('.burger');
let closeMenu = document.querySelector('.menu__close');
let menu = document.querySelector('.menu');





let swiperLib1 = new Swiper(swiper1, {
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 105
})

let swiperLib2 = new Swiper(swiper2, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    fadeEffect: {
        crossFade: true
    },
    effect: 'fade',
    navigation: {
        nextEl: '.btn-right',
        prevEl: '.btn-left',
    }
})

burger.addEventListener('click', () => {
    menu.classList.add('menu--visible')
})

closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu--visible')
})


// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


// validate forms
let validateForms = function(selector, rules) {

    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function(form, values, ajax) {
            var formData = new FormData(form);

            var xhr = new XMLHttpRequest();


            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {

                    if (xhr.status === 200) {
                        console.log('Отправлено!')
                    } else {

                    }
                }
            }

            // Add any event handlers here...
            xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
        },
    });
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-form', { email: { required: true, email: true } });
