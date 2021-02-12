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

// change text on buy button
$('.buy').on('click', () => {
    $('.buy').html('В корзину');
})

$('.buy').on('click', () => {
    $('.buy.active').html('В корзине');
})

//   show desktop header menu while hover to link 
$(function() {
    $(".hover-menu").mouseenter(function() {
        $('.triangle').removeClass("hidden");
        $('.hiddennav').removeClass("hidden");
    });
    $(".hover-menu").mouseleave(function() {
        $('.triangle').addClass("hidden");
        $('.hiddennav').addClass("hidden");
    });
});

// scroll to top of page link
jQuery(document).ready(function() {
    var btn = $('#to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
});

// show and hide params list on click to params title (only compare page)
$(".params-title").click(function() {
    $(this).toggleClass('params-hidden');
    $(this).next('.params-list').toggle();
});

// price range (catalog page - left filters)
$(document).ready(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 10000,
        values: [2000, 7000],
        slide: function(event, ui) {
            $('#min-price').val(ui.values[0]);
            $('#max-price').val(ui.values[1]);
        }
    });
    $('#min-price').val($("#slider-range").slider("values", 0));
    $('#max-price').val($("#slider-range").slider("values", 1));
});

  // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();

// swiper slider (only card page)
var galleryThumbs = new Swiper('.gallery-thumbs', {
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 3,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        992: {
            spaceBetween: 15
        },
        // when window width is >= 1200px
        1200: {
            spaceBetween: 10
        }
    }
});
var galleryTop = new Swiper('.gallery-top', {
    direction: 'vertical',
    spaceBetween: 10,
    thumbs: {
        swiper: galleryThumbs,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});