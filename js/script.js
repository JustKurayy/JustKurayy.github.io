let title = document.querySelector('.title-names').textContent;
let allTitles = ["Software Developer", "Game Designer", "Game Director", "Writer"];

function changeTitle() {
    title = `${allTitles[Math.floor(Math.random() * 3)]}`;
}

setInterval(changeTitle, 1000);