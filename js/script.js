// show search on desktop
$('.show-search').on('click', () => {
    $('.show-search').addClass('hidden');
    $('.desktop-menu').addClass('hidden');
    $('.search').removeClass('hidden');
    $('.header-search-input').focus();
})

// hide search on desktop
$('.hide-search').on('click', () => {
    $('.show-search').removeClass('hidden');
    $('.desktop-menu').removeClass('hidden');
    $('.search').addClass('hidden');
})

// show mobile menu on show btn
$('.gamburger').on('click', () => {
    $('.gamburger').addClass('hidden');
    $('.gamburger-close').removeClass('hidden');
    $('.mobile-menu').removeClass('hidden');
})

// hide mobile menu on close btn
$('.gamburger-close').on('click', () => {
    $('.gamburger-close').addClass('hidden');
    $('.gamburger').removeClass('hidden');
    $('.mobile-menu-common').addClass('hidden');
})

// show catalog menu on mobile
$('.catalog-btn').on('click', () => {
    $('.mobile-menu').addClass('hidden');
    $('.mobile-menu-catalog').removeClass('hidden');
})

// back to main menu on mobile
$('.btn-catalog-back').on('click', () => {
    $('.mobile-menu-catalog').addClass('hidden');
    $('.mobile-menu').removeClass('hidden');
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



// disabled newsletter form on footer
$('#newsletter-btn').on('click', () => {
    $("#newsletter-btn").attr("disabled", true);
    $("#newsletter-input").attr("disabled", true);
})

// const btnsAll = document.querySelectorAll('.list-block-title')

// btnsAll.forEach(btn => {
//     btn.addEventListener('click', (event) => {
//         btnsAll.forEach(btn => {
//             btn.classList.remove('active')
//         })

//         event.currentTarget.classList.add('active')
//     })
// })