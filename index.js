const incbut = document.getElementsByClassName("inc")[0];
const decbut = document.getElementsByClassName("dec")[0];
const resetbut = document.getElementsByClassName("reset")[0];
const affichage = document.getElementsByClassName("affichage")[0];
let num = 0;

incbut.onclick = function() {
    num++;
    affichage.textContent = num;
}

decbut.onclick = function() {
    num--;
    affichage.textContent = num;
}

resetbut.onclick = function() {
    num = 0;
    affichage.textContent = num;
}
