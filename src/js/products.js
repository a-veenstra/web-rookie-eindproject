import '../css/orders-products.css'
import productenlijst from '../products.json'

// Zorgt dat er altijd een productenlijst in localStorage staat
if (!localStorage.getItem("producten")) {
    localStorage.setItem("producten", JSON.stringify(productenlijst));
}

const producten = JSON.parse(localStorage.getItem("producten"));
const tabel = document.getElementById("productenlijst");

// Toont elk product als rij, met knoppen om te bewerken of te verwijderen
for (let i = 0; i < producten.length; i++) {
    const rij = document.createElement("tr");
    const product = producten[i];

    rij.innerHTML = `<td class="font-bold">${product.id}</td>
    <td>${product.name}</td>
    <td>€ ${product.price}</td>
    <td>${product.set_img_url}</td>
    <td class="border-t border-[lightgray]"><a href="edit-product.html?id=${product.id}" class="text-blue-700">Edit</a></td>
    <td class="border-t border-[lightgray]"><button class="remove-button text-red-700 cursor-pointer">Remove</button></td>`;

    tabel.append(rij);

    const removeKnop = rij.querySelector(".remove-button");
    removeKnop.addEventListener("click", () => {
        let removeIndex = -1;

        for (let j = 0; j < producten.length; j++) {
            if (producten[j].id == product.id) {
                removeIndex = j;
            }
        }
        
        producten.splice(removeIndex, 1);
        localStorage.setItem("producten", JSON.stringify(producten));
        location.reload();
    });
}

// Zet de productenlijst terug naar de originele lijst uit products.json
const resetKnop = document.getElementById("reset-button");
resetKnop.addEventListener("click", () => {
    localStorage.setItem("producten", JSON.stringify(productenlijst));
    location.reload();
});