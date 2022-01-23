window.addEventListener('scroll', function () {
    let navTitle = document.querySelector('.navbar-brand')
    0 < window.scrollY ? navTitle.classList.remove('top') : navTitle.classList.add('top')
});