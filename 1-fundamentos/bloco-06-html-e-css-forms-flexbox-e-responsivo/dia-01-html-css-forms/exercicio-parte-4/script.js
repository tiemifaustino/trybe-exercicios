// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

/* 1 - Adicione um evento click no elemento a que possui o id href . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar no link, nada deve acontecer. */
function preventDefaultLink(event) {
    event.preventDefault();
}
HREF_LINK.addEventListener('click', preventDefaultLink);

/* 2 - Adicione um evento click no elemento checkbox que possui o id input-checkbox . Na função do evento, implemente o método .preventDefault() para previnir o comportamento padrão do elemento. Ou seja, ao clicar na caixinha, nada deve acontecer. */
function preventDefaultCheckbox(event) {
    event.preventDefault();
}
INPUT_CHECKBOX.addEventListener('click', preventDefaultCheckbox);

/* 3 - Adicione um evento keypress no elemento input type="text" que possui o id input-text . Na função do evento, implemente o método .preventDefault() de forma que somente o caractere a (letra 'a' minúscula) possa ser digitado na caixinha. ( dica: para capturar a tecla digitada, utilize o event.key ) */
function preventDefaultInput(event) {
   if (event.key !== 'a') {
       event.preventDefault();
   }
}

INPUT_TEXT.addEventListener('keypress', preventDefaultInput);