// Toggle navbar menu
const menu = document.querySelector('#menu-bars');
const header = document.querySelector('header');

menu?.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
});

// Close menu on scroll
window.addEventListener('scroll', () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
});

// Close banner
document.querySelector('.banner__close')?.addEventListener('click', function () {
    this.closest('.banner').style.display = 'none';
});

// Copy project links with tooltip feedback
function infunction(boxId, spanId) {
    navigator.clipboard.writeText(`https://madhawaperera.com/#${boxId}`);
    const tooltip = document.getElementById(spanId);
    tooltip.innerHTML = "Link copied";
}

function outFunc(spanId) {
    const tooltip = document.getElementById(spanId);
    tooltip.innerHTML = "Copy the link";
}
