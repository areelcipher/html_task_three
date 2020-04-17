const emailBtn = document.querySelector('#email__icon');
const contactForm = document.querySelector('#contact__form');
const biosInfos = document.querySelector('#bios__infos');
const backButton = document.querySelector('#back__button');

emailBtn.addEventListener('click', () => {
    contactForm.style.display = 'block';
    biosInfos.style.display = 'none'
});

backButton.addEventListener('click', () => {
    contactForm.style.display = 'none';
    biosInfos.style.display = 'block';
});