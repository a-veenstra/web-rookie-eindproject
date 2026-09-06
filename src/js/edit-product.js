import '../css/add-edit-product.css'
import productenlijst from '../products.json'

// Zorgt dat er altijd een productenlijst in localStorage staat
if (!localStorage.getItem("producten")) {
    localStorage.setItem("producten", JSON.stringify(productenlijst));
}

const producten = JSON.parse(localStorage.getItem("producten"));

// Haalt het ID uit de URL, bijvoorbeeld ?id=2
const url = new URLSearchParams(window.location.search);
const productId = parseInt(url.get("id"));

// Zoekt het juiste product op
let huidigProduct;

for (let i = 0; i < producten.length; i++) {
    if (producten[i].id == productId) {
        huidigProduct = producten[i];
    }
}

const naamInput = document.getElementById("naam");
const prijsInput = document.getElementById("prijs");
const afbeeldingInput = document.getElementById("afbeelding");
const preview = document.getElementById("image-preview");
const opslaanKnop = document.getElementById("add-button");

// Vult de velden alvast in met de huidige gegevens
naamInput.value = huidigProduct.name;
prijsInput.value = huidigProduct.price;
afbeeldingInput.value = huidigProduct.set_img_url;
preview.src = huidigProduct.set_img_url;

afbeeldingInput.addEventListener("input", () => {
    preview.src = afbeeldingInput.value;
});

opslaanKnop.addEventListener("click", () => {
    const naam = naamInput.value;
    const prijs = parseFloat(prijsInput.value);
    const afbeelding = afbeeldingInput.value;

    if (!naam || !prijs || !afbeelding) {
        alert("Vul alle velden in.");
        return;
    }

    huidigProduct.name = naam;
    huidigProduct.price = prijs;
    huidigProduct.set_img_url = afbeelding;

    localStorage.setItem("producten", JSON.stringify(producten));

    location.href = "products.html";
});