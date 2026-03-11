let h = document.querySelector("#titol-principal");
        h.style.color = "red";
        console.log(h)

        // 2
        let p = document.querySelector("p");
        p.textContent = "Hola Mon";

        // 3
        let imatge = document.querySelector ("img");
        imatge.setAttribute("src" , "https://motor.flexicar.es/wp-content/uploads/2025/03/senal-prohibido-estacionar-parar-1.jpg" );

        // 4

        let caixa = document.querySelector("#caixa-estil");
        caixa.addEventListener("click", function() {
        caixa.style.backgroundColor = "lightblue";
        });
        

        // 5
        let botoToggle = document.querySelector("#boto-toggle");
        let textClasse = document.querySelector("#text-classe");

        botoToggle.addEventListener("click", function() {
        textClasse.classList.toggle("actiu");
        });

        // 6

        let botoafegir = document.querySelector("#llista-compra");
            botoafegir.addEventListener("click", function() {
            alert("Hola, no t'oblidis de menjar!");
        });
        
        // 7

        
        let llistaCompra = document.querySelector("#boto-afegir");
            let nouli = document.createElement("li");
                nouli.textContent = "Tomaquet";
                llistaCompra.appendChild(nouli);

        
        // 8

        let elementeliminar = document.querySelector("#element-eliminar");
            elementeliminar.addEventListener("click", function(){
                let borram = elementeliminar.parentNode;
                borram.removeChild(elementeliminar);
            })