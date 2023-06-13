let title = document.querySelector('.title-names').textContent;
let allTitles = ["Software Developer", "Game Designer", "Game Director", "Writer"];
let current = 0;

function changeTitle() {
    if (current < allTitles.length) {
        document.querySelector('.title-names').textContent = allTitles[current];
    } else {
        current = 0;
        document.querySelector('.title-names').textContent = allTitles[current];
    }
    current++;
}

setInterval(changeTitle, 2000);

document.querySelector('.higher-lower').addEventListener('click', () => {
    window.open("https://sirquandale.github.io/Higher-Lower", _blank);
});