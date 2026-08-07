const btn = document.querySelector('#contactBtn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeBtn');
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = themeToggle.querySelector('i');

function openModal() {
    modal.classList.add('is-open');
}

function closeModal() {
    modal.classList.remove('is-open');
}

function setTheme(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    themeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);

themeToggle.addEventListener('click', () => {
    setTheme(!document.documentElement.classList.contains('dark'));
});

btn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});
