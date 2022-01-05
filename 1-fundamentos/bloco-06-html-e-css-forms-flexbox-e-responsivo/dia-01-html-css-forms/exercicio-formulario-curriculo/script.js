const states = document.getElementById("state");

const statesBr = ["AC", "AL", "AP", "AM", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP","SE", "TO", "DF"];


for (let i = 0; i < statesBr.length; i += 1) {
    let option = document.createElement("option");
    option.className = "states";
    option.innerText = statesBr[i];
    option.value = statesBr[i];
    states.appendChild(option);
}

/* for (let item of statesBr) {
    let option = document.createElement("option");
    option.className = "states";
    option.innerText = item;
    option.value = item;
    states.appendChild(option);
} */