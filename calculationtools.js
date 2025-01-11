//Traluträknare
const trallskruvm2 = 30;
let antalm2;
let resultat;

document.getElementById("calculate").onclick = function(){
    antalm2 = document.getElementById("input").value;
    antalm2 = Number(antalm2);
    resultat = trallskruvm2 * antalm2;
    document.getElementById("trallresultat").textContent = resultat + " trallskruv";
}


//Vilken dragare?
const currentImage = document.getElementById('current-image');
const knapp1 = document.getElementById('knapp1');
const knapp2 = document.getElementById('knapp2');
const knapp3 = document.getElementById('knapp3');

function changeImage(imageSrc) {
    currentImage.src = imageSrc;
}

knapp1.addEventListener('click', () => changeImage('product-images/Black & Decker BCD001C1 - 890kr.jpg'));
knapp2.addEventListener('click', () => changeImage('product-images/STANLEY FatMax -  2690kr.jpg'));
knapp3.addEventListener('click', () => changeImage('product-images/Makita DDF484RTJ - 4790kr.jpg'));