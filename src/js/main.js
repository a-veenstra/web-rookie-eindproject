import '../css/style.css'
import productenlijst from '../products.json'

// Zorgt dat er altijd een productenlijst in localStorage staat
if (!localStorage.getItem("producten")) {
    localStorage.setItem("producten", JSON.stringify(productenlijst));
}

const producten = JSON.parse(localStorage.getItem("producten"));
const container = document.querySelector(".producten-grid");
const badge = document.getElementById("badge");

// Toont elk product met een knop om toe te voegen aan de winkelwagen
for (let i = 0; i < producten.length; i++) {
    const product = document.createElement("div");
    product.classList.add("product", "w-full", "md:w-71.5", "2xl:w-112");

    product.innerHTML = `<img src="${producten[i].set_img_url}" class="product-afbeelding h-50 2xl:h-96">
    <strong>${producten[i].name}</strong>
    <p>€ ${producten[i].price}</p>`;

    const addToCartKnop = document.createElement("button");
    addToCartKnop.innerHTML = "Voeg toe aan winkelwagen";
    addToCartKnop.classList.add("add-to-cart-knop");

    container.append(product);
    product.append(addToCartKnop);

    addToCartKnop.addEventListener("click", () => {
        producten[i].amount_in_cart++;
        localStorage.setItem("producten", JSON.stringify(producten));
        checkBadgeVisibility();
    });
}

// Laat een rode badge op het winkelwagen-icoon zien als er iets in de winkelwagen zit
function checkBadgeVisibility() {
    let totalInCart = 0;
    
    for (let i = 0; i < producten.length; i++) {
        totalInCart += producten[i].amount_in_cart;
    }

    if (totalInCart == 0) {
        badge.style.visibility = "hidden";
    } else {
        badge.style.visibility = "visible";
    }
}

checkBadgeVisibility();