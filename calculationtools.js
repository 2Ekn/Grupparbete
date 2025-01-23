//Tralluträknare
const trallskruvm2 = 30;
const meterperm2 = 8.5;

let trallmeter;
let antalm2;
let resultat1;
let resultat2;

document.getElementById("calculate").onclick = function(){
    antalm2 = document.getElementById("input").value; 
    antalm2 = Number(antalm2); 
    resultat1 = trallskruvm2 * antalm2;
    resultat2 = meterperm2 * antalm2;
    document.getElementById("trallresultat").textContent = resultat1 + " trallskruv";
    document.getElementById("trallmeter").textContent = resultat2 + " meter trall";
}

//Vilken dragare?
const currentImage = document.getElementById('dragarbild');
const currentText = document.getElementById('dragartext');
const knapp1 = document.getElementById('knapp1');
const knapp2 = document.getElementById('knapp2');
const knapp3 = document.getElementById('knapp3');

function changeImage(imageSrc) {
    currentImage.src = imageSrc;
}

function changeText(textSrc){
    currentText.textContent = textSrc;
}

knapp1.addEventListener('click', () => changeImage('assets/black&decker ai.jpeg'));
knapp2.addEventListener('click', () => changeImage('assets/stanley ai.jpeg'));
knapp3.addEventListener('click', () => changeImage('assets/makita ai.jpeg'));

knapp1.addEventListener('click', () => changeText('Black & Decker är en skruvdragare som erbjuder grundläggande funktioner för enklare hemmaprojekt.'));
knapp2.addEventListener('click', () => changeText('Stanley är en pålitlig och prisvärd skruvdragare som kombinerar kvalitet och prestanda för både vardagliga och mer avancerade projekt.'));
knapp3.addEventListener('click', () => changeText('Makita skruvdragarna är i toppklass som levererar högsta prestanda, precision och hållbarhet för professionella användare och krävande projekt.'));