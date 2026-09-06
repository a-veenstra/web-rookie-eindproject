import '../css/add-edit-product.css'
import productenlijst from '../products.json'

// Zorgt dat er altijd een productenlijst in localStorage staat
if (!localStorage.getItem("producten")) {
    localStorage.setItem("producten", JSON.stringify(productenlijst));
}

const producten = JSON.parse(localStorage.getItem("producten"));

const naamInput = document.getElementById("naam");
const prijsInput = document.getElementById("prijs");
const afbeeldingInput = document.getElementById("afbeelding");
const preview = document.getElementById("image-preview");
const addKnop = document.getElementById("add-button");

// Werkt de preview bij terwijl je typt
afbeeldingInput.addEventListener("input", () => {
    preview.src = afbeeldingInput.value;
});

addKnop.addEventListener("click", () => {
    const naam = naamInput.value;
    const prijs = parseFloat(prijsInput.value);
    const afbeelding = afbeeldingInput.value;

    if (!naam || !prijs || !afbeelding) {
        alert("Vul alle velden in.");
        return;
    }

    // Nieuw ID = hoogst bestaande ID + 1, zodat de ID's altijd uniek blijven
    let hoogsteId = -1;

    for (let i = 0; i < producten.length; i++) {
        if (producten[i].id > hoogsteId) {
            hoogsteId = producten[i].id;
        }
    }

    const nieuwId = hoogsteId + 1;

    const nieuwProduct = {
        "id": nieuwId,
        "name": naam,
        "price": prijs,
        "amount_in_cart": 0,
        "set_img_url": afbeelding
    };

    producten.push(nieuwProduct);
    localStorage.setItem("producten", JSON.stringify(producten));

    location.href = "products.html";
});