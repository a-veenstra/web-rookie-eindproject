import '../css/orders-products.css'

const bestellingen = JSON.parse(localStorage.getItem("bestellingen")) || [];
const bestellingenTabel = document.getElementById("bestellingen-tabel");

// Toont elke bestelling als rij in de tabel
for (let i = 0; i < bestellingen.length; i++) {
    const rij = document.createElement("tr");

    rij.innerHTML = `<td class="font-bold">${bestellingen[i].id}</td>
    <td>€ ${bestellingen[i].totaal}</td>
    <td>${bestellingen[i].datum}, ${bestellingen[i].tijd}</td>`;

    bestellingenTabel.append(rij);
}