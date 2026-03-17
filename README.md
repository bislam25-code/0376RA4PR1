# 0376RA4PR1 — Exercicis pràctics de DOM

Pràctica de manipulació del DOM amb JavaScript pur.  
Cada exercici treballa una funcionalitat diferent de l'API del DOM.

---

##  LLenguatges utilitzats

- HTML5
- CSS3
- JavaScript (Vanilla)

---
    
## Estructura del projecte
```
0376RA4PR1/
├── index.html on tinc tot el text
├── style.css  Aqui els diferents estils i colors
├── script.js  El script per a quan toco els botons
└── README.md  Aquest document
```

---

## Exercicis i solucions

### Exercici 1 — Canviar el color del títol

Selecciona el `h1` pel seu `id` i canvia el color del text a vermell amb `style.color`.
```js
let h = document.querySelector("#titol-principal");
h.style.color = "red";
```

---

### Exercici 2 — Modificar el text d'un paràgraf

Selecciona el primer `<p>` i canvia el contingut amb `textContent`.
```js
let p = document.querySelector("p");
p.textContent = "Hola Mon";
```

---

### Exercici 3 — Canviar l'atribut `src` d'una imatge

Selecciona la imatge i utilitza `setAttribute` per canviar la URL de la font.
```js
let imatge = document.querySelector("img");
imatge.setAttribute("src", "https://motor.flexicar.es/wp-content/uploads/2025/03/senal-prohibido-estacionar-parar-1.jpg");
```

---

### Exercici 4 — Canviar el fons d'una caixa amb clic

Afegeix un `addEventListener` de tipus `click`. En fer clic, canvia el `backgroundColor`.
```js
let caixa = document.querySelector("#caixa-estil");
caixa.addEventListener("click", function() {
  caixa.style.backgroundColor = "lightblue";
});
```

---

### Exercici 5 — Toggle de classe CSS

Utilitza `classList.toggle` per afegir o treure la classe `actiu` en cada clic.
```js
let botoToggle = document.querySelector("#boto-toggle");
let textClasse = document.querySelector("#text-classe");

botoToggle.addEventListener("click", function() {
  textClasse.classList.toggle("actiu");
});
```

---

### Exercici 6 — Llançar una alerta amb un botó

Afegeix un `addEventListener` al botó que dispara un `alert` amb un missatge.
```js
let botoalerta = document.querySelector("#boto-alerta");
botoalerta.addEventListener("click", function() {
  alert("Hola, no t'oblidis de menjar!");
});
```

---

### Exercici 7 — Afegir elements a una llista

Crea un `<li>` amb `createElement`, assigna-li text i afegeix-lo amb `appendChild`.
```js
let llista = document.querySelector("#llista-compra");
let botoafegir = document.querySelector("#boto-afegir");

botoafegir.addEventListener("click", function() {
  let crearli = document.createElement("li");
  crearli.textContent = "Tomaquet";
  llista.appendChild(crearli);
});
```

---

### Exercici 8 — Eliminar un element del DOM

Selecciona el node pare amb `parentNode` i elimina el fill amb `removeChild`.
```js
let elementeliminar = document.querySelector("#element-eliminar");
elementeliminar.addEventListener("click", function() {
  let borram = elementeliminar.parentNode;
  borram.removeChild(elementeliminar);
});
```

---

## Que he fet per executar el projecte

1. He posat el meu nom 
   git config --global user.name "Ul Islam - Bazam"

2. Després el mail
    git config --global user.email "bislam25@ilb.cat"


3. Clona el repositori:
```bash
git clone https://github.com/bislam25-code/0376RA4PR1.git

```
4. Poso el branch
    git branch -M main

5. Faig el push 
    git push -u origin main

6. Obro `index.html` directament al navegador.




