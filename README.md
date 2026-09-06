# LEGO Webshop

Eindproject: een webshop waar je verschillende LEGO-sets kunt bekijken en bestellen, met een admin-gedeelte om de productenlijst te beheren.

## Certificaat

Met studiepunten

## Live versie

De webshop is te bekijken op: https://lego-webshop.netlify.app/

Het admin-gedeelte is te bereiken via: https://lego-webshop.netlify.app/admin

## Over het project

Gebruikers kunnen:

- Alle beschikbare LEGO-sets bekijken
- Producten toevoegen aan de winkelwagen
- Zien hoeveel er in hun winkelwagen zit
- De winkelwagen legen
- Afrekenen en een bestelbevestiging krijgen

Admins kunnen (via /admin):

- Alle geplaatste bestellingen bekijken
- Producten toevoegen, bewerken en verwijderen
- De productenlijst terugzetten naar de originele staat

Alle data (producten, winkelwagen, bestellingen) wordt opgeslagen in localStorage. De webshop is getest op alle functionaliteiten.

## Technieken

- HTML, Javascript, CSS
- Tailwind CSS via Vite
- Gehost op Netlify

## Project lokaal draaien

1. Open de terminal
2. Installeer de dependencies:

```
npm install
```

3. Start de development server:

```
npm run dev
```

4. Ga naar de URL die in de terminal verschijnt of typ o + enter

Om een productieversie te bouwen:

```
npm run build
```

De gebouwde bestanden komen dan in de map 'dist'.
