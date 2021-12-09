// *** alterar a cor do background para verde do header
const header = document.querySelector('#header-container');
header.style.backgroundColor = 'green';

// *** alterar a cor para purple nos títulos da primeira coluna
// const firstLineFirstColumn = document.querySelectorAll('h3')[0];
// const secondLineFirstColumn = document.querySelectorAll('h3')[1];
// secondLineFirstColumn.style.backgroundColor = '#745CFF';
// firstLineFirstColumn.style.backgroundColor = '#745CFF';

const firstTitles = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < firstTitles.length; i += 1) {
    firstTitles[i].style.backgroundColor = '#745CFF';
}

// *** alterar a cor de fundo para pink da primeira coluna
const firstColumn = document.getElementsByClassName('emergency-tasks')[0];
firstColumn.style.backgroundColor = 'pink';

// *** alterar a cor para black nos títulos da segunda coluna
const secondTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < secondTitles.length; i += 1) {
    secondTitles[i].style.backgroundColor = 'black';
}

// *** alterar a cor de fundo para pink da segunda coluna
const secondColumn = document.getElementsByClassName('no-emergency-tasks')[0];
secondColumn.style.backgroundColor = '#fcca46';