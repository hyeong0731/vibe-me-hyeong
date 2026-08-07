const btn = document.querySelector('#contactBtn');
const modal = document.querySelector('#modal');
const closeBtn = document.querySelector('#closeBtn');

function openModal() {
    modal.classList.add('is-open');
}

function closeModal() {
    modal.classList.remove('is-open');
}

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
