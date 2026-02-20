const navBarre = document.getElementById('nav');
const openButton = document.getElementById('openBtn');
const closeButton = document.getElementById('closeBtn');

openButton.addEventListener('click', () => {
    openButton.classList.add('hidden');
    closeButton.classList.remove('hidden');
    navBarre.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
    closeButton.classList.add('hidden');
    openButton.classList.remove('hidden');
    navBarre.classList.add('hidden');
});