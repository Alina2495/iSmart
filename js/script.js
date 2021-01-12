const btnsAll = document.querySelectorAll('.list-block-title')

btnsAll.forEach(btn => {
    btn.addEventListener('click', (event) => {
        btnsAll.forEach(btn => {
            btn.classList.remove('active')
        })

        event.currentTarget.classList.add('active')
    })
})