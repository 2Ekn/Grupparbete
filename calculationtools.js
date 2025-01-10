
const trallskruvm2 = 30;
let antalm2;
let resultat;

document.getElementById("calculate").onclick = function(){
    antalm2 = document.getElementById("input").value;
    antalm2 = Number(antalm2);
    resultat = trallskruvm2 * antalm2;
    document.getElementById("trallresultat").textContent = resultat + " trallskruv";
}