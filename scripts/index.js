let navTitle = document.querySelector('.navbar-brand')
let photoHome = document.querySelector('.myphoto')
let project = document.querySelector('.project')
let project1 = document.querySelector('#projects div')


window.addEventListener('scroll', function () {
    0 < window.scrollY ? navTitle.classList.remove('top') : navTitle.classList.add('top')
    0 < window.scrollY ? photoHome.classList.remove('top') : photoHome.classList.add('top')
    console.log(isInViewport(project1))
});

window.onload = function () {
    setTimeout(() => {
        navTitle.classList.add('top')
        photoHome.classList.add('top')
    }, 500)
}



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect.top, rect.bottom, window.innerHeight || document.documentElement.clientHeight)
    return (
        rect.top >= -500 &&
        rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) + 300)
    );
}