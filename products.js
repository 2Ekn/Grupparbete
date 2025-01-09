let articles = {
    articelname1: "Makita DDF484RTJ",
    articelprice1: "4790:-",
    articeldescription1: "Borrskruvdragare på 18V med kolborstfri motor och momentläge i 21 steg. Vridmoment på 54Nm med varvtal upp till 2000/min. Levereras med batteri och laddare.",
    
    articelname2: "Bosch GSR 18V-EC",
    articelprice2: "3679:-",
    articeldescription2: "Borrskruvdragare på 18 V med kolborstfri motor, varvtal på upp till 1900/min och vridmoment på upp till 60 Nm. Levereras med batteri och laddare.",
    
    articelname3: "Milwaukee M18 BLDDRC",
    articelprice3: "3590:-",
    articeldescription3: "Borrskruvdragare på 12V med momentläge i 21 steg och 2 hastigheter. Vridmoment på 30Nm och upp till 1500 varv/min. Levereras med batteri och laddare.",
    
    articelname4: "HiKOKI DS18DD",
    articelprice4: "2590:-",
    articeldescription4: "Borrskruvdragare på 18V med upp till 55 Nm i moment, 13 mm:s snabbchuck, motorbroms samt en kolborstfri motor för ökad drifttid och längre livstid. Levereras med batteri och laddare.",
    
    articelname5: "STANLEY FatMax",
    articelprice5: "2690:-",
    articeldescription5: "Slagborrmaskin på 18 V med upp till 5,950/25,500 slag per minut och maximalt vridmoment på 50 Nm. Utrustad med en kraftfull motor som ger 1500 varv/minut och möjliggör effektiv borrning och skruvdragning i trä, metall och plast. Levereras med batteri och laddare.",
    
    articelname6: "Metabo BS 18",
    articelprice6: "3190:-",
    articeldescription6: "Kompakt 18 V borrskruvdragare med kort design och ett vridmoment mellan 24-48 Nm. Skruvdragaren har ett integrerat arbetsljus för belysning av arbetsplatsen samt praktisk bälteskrok och bitsförvaring, och verktygslös montering till höger eller vänster. Levereras med batteri och laddare.",
    
    articelname7: "Milwaukee M12 BDD-202C",
    articelprice7: "2390:-",
    articeldescription7: "Borrskruvdragare på 12V med momentläge i 21 steg och 2 hastigheter. Vridmoment på 30Nm och upp till 1500 varv/min. Levereras med batteri och laddare.",
    
    articelname8: "Black & Decker BCD001C1",
    articelprice8: "890:-",
    articeldescription8: "Borrskruvdragare på 18 V med 11 momentsteg, maximalt vridmoment på 37 Nm och hastighet på 0-600 varv/min. Ultrakompakt, lätt design för svåråtkomliga, begränsade ytor. Levereras med batteri och laddare.",
    
    articelname9: "Flex DD 2G",
    articelprice9: "2890:-",
    articeldescription9: "Borrskruvdragare på 10,8V med två hastigheter, elektroniskt snabbstopp och höger/vänster-rotation med säkerhetsspärr. Vridmoment på 34Nm och upp till 1300 varv/min. Levereras med batteri och laddare.",
    
    articelname10: "Bosch GSR 12V-15",
    articelprice10: "1590:-",
    articeldescription10: "Borrskruvdragare på 12V med ett varvtal på upp till 1300 varv/min 30 Nm vridmoment. Dess kompakta design ger optimal hantering och gör den perfekt för arbete över huvudhöjd samt i trånga utrymmen. Levereras med batteri och laddare.",
};

for (let i = 1; i <= 10; i++) {
    document.getElementById(`articelname${i}`).textContent = articles[`articelname${i}`];
    document.getElementById(`articelprice${i}`).textContent = articles[`articelprice${i}`];
  }
  
// document.getElementById("articelname1").textContent = articelname1;
// document.getElementById("articelprice1").textContent = articelprice1;
// // document.getElementById("articeldescription1").textContent = articeldescription1;

// document.getElementById("articelname2").textContent = articelname2;
// document.getElementById("articelprice2").textContent = articelprice2;
// // document.getElementById("articeldescription2").textContent = articeldescription2;

// document.getElementById("articelname3").textContent = articelname3;
// document.getElementById("articelprice3").textContent = articelprice3;
// // document.getElementById("articeldescription3").textContent = articeldescription3;

// document.getElementById("articelname4").textContent = articelname4;
// document.getElementById("articelprice4").textContent = articelprice4;
// // document.getElementById("articeldescription4").textContent = articeldescription4;

// document.getElementById("articelname5").textContent = articelname5;
// document.getElementById("articelprice5").textContent = articelprice5;
// // document.getElementById("articeldescription5").textContent = articeldescription5;

// document.getElementById("articelname6").textContent = articelname6;
// document.getElementById("articelprice6").textContent = articelprice6;
// // document.getElementById("articeldescription6").textContent = articeldescription6;

// document.getElementById("articelname7").textContent = articelname7;
// document.getElementById("articelprice7").textContent = articelprice7;
// // document.getElementById("articeldescription7").textContent = articeldescription7;

// document.getElementById("articelname8").textContent = articelname8;
// document.getElementById("articelprice8").textContent = articelprice8;
// // document.getElementById("articeldescription8").textContent = articeldescription8;

// document.getElementById("articelname9").textContent = articelname9;
// document.getElementById("articelprice9").textContent = articelprice9;
// // document.getElementById("articeldescription9").textContent = articeldescription9;

// document.getElementById("articelname10").textContent = articelname10;
// document.getElementById("articelprice10").textContent = articelprice10;
// // document.getElementById("articeldescription10").textContent = articeldescription10;
