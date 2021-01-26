// search on header

$('.show-search').on('click', () => {
    $('.show-search').addClass('hidden');
    $('.header-menu').addClass('hidden');
    $('.search').removeClass('hidden');
    $('.header-search-input').focus();
})

$('.hide-search').on('click', () => {
    $('.show-search').removeClass('hidden');
    $('.header-menu').removeClass('hidden');
    $('.search').addClass('hidden');
})

// search on header end

$('.btn-add-item').on('click', () => {
    $this.text("<b>Some</b> new text.");
    $('this').addClass('btn-added-item');
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