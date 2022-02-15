

let navTitle = document.querySelector('.navbar-brand')
let photoHome = document.querySelector('.myphoto')
let project = document.querySelector('.project')
let project1 = document.querySelector('#projects div')


window.addEventListener('scroll', function () {
    0 < window.scrollY ? navTitle.classList.remove('top') : navTitle.classList.add('top')
    0 < window.scrollY ? photoHome.classList.remove('top') : photoHome.classList.add('top')
});

window.onload = function () {
    $('.loader-container').slideUp()
    setTimeout(() => {
        navTitle.classList.add('top')
        photoHome.classList.add('top')
    }, 500)
}



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= -500 &&
        rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + 300)
    );
}

$('.navbar-toggler').on('click', function () {
    $('.navbar-brand').toggleClass('top')
})