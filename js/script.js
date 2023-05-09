const aboutMe = document.querySelector('.about-me');
const tab = document.querySelector('.tab');
const closeItem = document.querySelector('.close-item');
const maxItem = document.querySelector('.max-item');
const minItem = document.querySelector('.min-item');

aboutMe.addEventListener('click', () => {
    document.querySelector('.tab').classList.remove('invisible');
    document.querySelector('.tab-info').textContent = "About me";
});

closeItem.addEventListener('click', () => {
    document.querySelector('.tab').classList.add('invisible');
});