// show search on desktop
$('.show-search').on('click', () => {
    $('.show-search').addClass('hidden');
    $('.header-menu').addClass('hidden');
    $('.search').removeClass('hidden');
    $('.header-search-input').focus();
})

// hide search on desktop
$('.hide-search').on('click', () => {
    $('.show-search').removeClass('hidden');
    $('.header-menu').removeClass('hidden');
    $('.search').addClass('hidden');
})

$('.gamburger').on('click', () => {
    $('.gamburger').addClass('hidden');
    $('.gamburger-close').removeClass('hidden');
    $('.mobile-menu').removeClass('hidden');
})

$('.gamburger-close').on('click', () => {
    $('.gamburger-close').addClass('hidden');
    $('.gamburger').removeClass('hidden');
    $('.mobile-menu-common').addClass('hidden');
})

$('.catalog-btn').on('click', () => {
    $('.mobile-menu-catalog').removeClass('hidden');
})

$('.btn-catalog-back').on('click', () => {
    $('.mobile-menu-catalog').addClass('hidden');
})

// show search on mobile
$('.show-mobile-search').on('click', () => {
    $('.mobile-search-wr').removeClass('hidden');
    $('.mobile-search-input').focus();
})

// hide search on mobile
$('.mobile-search-close').on('click', () => {
    $('.mobile-search-wr').addClass('hidden');
})

$('.catalog').on('hover', () => {
    $('.catalog-menu').removeClass('hidden');
});



// const btnsAll = document.querySelectorAll('.list-block-title')

// btnsAll.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         btnsAll.forEach(btn => {
//             btn.classList.remove('active')
//         })

//         event.currentTarget.classList.add('active')
//     })
// })

// Example starter JavaScript for disabling form submissions if there are invalid fields
// (function() {
//     'use strict'

//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     var forms = document.querySelectorAll('.needs-validation')

//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//         .forEach(function(form) {
//             form.addEventListener('submit', function(event) {
//                 if (!form.checkValidity()) {
//                     event.preventDefault()
//                     event.stopPropagation()
//                 }

//                 form.classList.add('was-validated')
//             }, false)
//         })
// })()