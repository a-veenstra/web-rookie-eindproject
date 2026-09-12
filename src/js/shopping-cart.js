import '../css/shopping-cart.css'
import productenlijst from '../products.json'

// Zorgt dat er altijd een productenlijst in localStorage staat
if (!localStorage.getItem("producten")) {
    localStorage.setItem("producten", JSON.stringify(productenlijst));
}

const producten = JSON.parse(localStorage.getItem("producten"));
const container = document.querySelector(".container");
const tabel = document.getElementById("tabel");
let totaal = 0;
const totaalOutput = document.getElementById("totaal");
const totaalDiv = document.getElementById("totaal-div");
const bestelKnop = document.getElementById("bestel-knop");

tabel.style.display = "none";
totaalDiv.style.display = "none";
bestelKnop.style.display = "none";

// Toont alleen de producten die in de winkelwagen zitten
for (let i = 0; i < producten.length; i++) {
    if (producten[i].amount_in_cart > 0) {
        const rij = document.createElement("tr");

        rij.innerHTML = `<td>${producten[i].name}</td>
        <td>${producten[i].amount_in_cart}</td>
        <td>€ ${producten[i].price}</td>
        <td>€ ${Math.round(producten[i].amount_in_cart * producten[i].price * 100) / 100}</td>`;

        tabel.append(rij);

        totaal += producten[i].amount_in_cart * producten[i].price;
    }
}

if (totaal > 0) {
    tabel.style.display = "table";
    totaalDiv.style.display = "flex";
    bestelKnop.style.display = "block";
    totaalOutput.innerHTML = "€ " + Math.round(totaal * 100) / 100;
} else {
    const leegTekst = document.createElement("p");
    leegTekst.innerHTML = "Je hebt nog niks toegevoegd";
    leegTekst.classList.add("text-center", "mt-2");
    container.append(leegTekst);
}

// Leegt de winkelwagen
const resetKnop = document.getElementById("reset-knop");
resetKnop.addEventListener("click", () => {
    for (let i = 0; i < producten.length; i++) {
        producten[i].amount_in_cart = 0;
    }
    
    localStorage.setItem("producten", JSON.stringify(producten));
    location.reload();
});

// Slaat de bestelling op en leegt daarna de winkelwagen
bestelKnop.addEventListener("click", () => {
    let bestellingen = JSON.parse(localStorage.getItem("bestellingen")) || [];

    const nieuweBestelling = {
        id: bestellingen.length,
        totaal: totaal,
        datum: new Date().toLocaleDateString("en-US"),
        tijd: new Date().toLocaleTimeString("en-US"),
    };

    bestellingen.push(nieuweBestelling);
    localStorage.setItem("bestellingen", JSON.stringify(bestellingen));

    for (let i = 0; i < producten.length; i++) {
        producten[i].amount_in_cart = 0;
    }

    localStorage.setItem("producten", JSON.stringify(producten));
});