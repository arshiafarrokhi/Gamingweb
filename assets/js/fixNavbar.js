let _navbar = document.getElementById('nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        _navbar.classList.add('fixed')
        _navbar.classList.add('w-full')
        // _navbar.classList.add('top-0')
        _navbar.classList.add('fixMenu')
        let _navbarHeight = _navbar.offsetHeight
        document.body.style.paddingTop = _navbarHeight + 'px';
    } else {
        _navbar.classList.remove('fixed')
        _navbar.classList.remove('w-full')
        // _navbar.classList.remove('top-0')
        _navbar.classList.remove('fixMenu')
        document.body.style.paddingTop = '0';
    }
})
