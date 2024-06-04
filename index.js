const incbut = document.getElementsByClassName("inc");
const decbut = document.getElementsByClassName("dec");
const reset = document.getElementsByClassName("reset");
const affichage = document.getElementsByClassName("affichage");
let num=0;

incbut.onclick = function(){
    num++;
   affichage.textContent = num ;
}


decbut.onclick = function(){
    num--;
   affichage.textContent = num ;
}
incbut.onclick = function(){
    num=0;
   affichage.textContent = num ;
}

