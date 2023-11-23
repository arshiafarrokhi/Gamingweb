let _button = document.getElementById('GoToTopButton')

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        _button.style.display = 'flex'

    } else {
        _button.style.display = 'none'
    }
})
_button.addEventListener('click', () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" })
})
