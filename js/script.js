// Toggle class active
const link = document.querySelector

('.link');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    link.classList.toggle('active');
};

// Klik di luar sidebar untuk menghilangkan nav
const menu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !link.contains(e.target)) {
        link.classList.remove('active');
    }
});